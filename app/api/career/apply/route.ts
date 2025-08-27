import { NextRequest, NextResponse } from 'next/server';
import { sendCareerApplicationEmails, type CareerApplicationData } from '@/lib/brevo';
import { CareerApplicationDB, FileUploadDB, ApplicationLogDB, checkDatabaseConnection, isDatabaseAvailable } from '@/lib/database';

// Validation function
function validateApplicationData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required');
  }
  
  if (!data.phone || data.phone.trim().length < 10) {
    errors.push('Phone number must be at least 10 digits');
  }
  
  if (!data.position || data.position.trim().length < 2) {
    errors.push('Position must be selected');
  }
  
  if (!data.experience || data.experience.trim().length < 10) {
    errors.push('Work experience must be at least 10 characters');
  }
  
  if (!data.coverLetter || data.coverLetter.trim().length < 50) {
    errors.push('Cover letter must be at least 50 characters');
  }
  
  if (data.portfolio && !/^https?:\/\/.+/.test(data.portfolio)) {
    errors.push('Portfolio link must be a valid URL');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Rate limiting (simple in-memory store)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 applications per 15 minutes per IP

function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return { allowed: true };
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, resetTime: record.resetTime };
  }
  
  // Increment count
  record.count++;
  rateLimitStore.set(ip, record);
  return { allowed: true };
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      const resetTime = rateLimitResult.resetTime;
      const waitTime = resetTime ? Math.ceil((resetTime - Date.now()) / 1000 / 60) : 15;
      
      return NextResponse.json(
        {
          success: false,
          error: 'Too many applications. Please try again in ' + waitTime + ' minutes.',
          code: 'RATE_LIMIT_EXCEEDED'
        },
        { status: 429 }
      );
    }

    // Parse form data
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const portfolio = formData.get('portfolio') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const cvFile = formData.get('cv') as File | null;

    // Create body object for validation
    const body = {
      fullName: name,
      email,
      phone,
      position,
      experience,
      portfolio,
      coverLetter
    };
    
    // Debug: Log received data
    console.log('Received form data:', {
      name,
      email,
      phone,
      position,
      experience,
      portfolio: portfolio || 'not provided',
      coverLetter: coverLetter ? `${coverLetter.length} chars` : 'not provided',
      cvFile: cvFile ? `${cvFile.name} (${cvFile.size} bytes)` : 'not provided'
    });
    
    // Validate required fields
    const validation = validateApplicationData(body);
    if (!validation.isValid) {
      console.log('Validation failed:', validation.errors);
      return NextResponse.json(
        {
          success: false,
          error: validation.errors.join(', '),
          details: validation.errors,
          code: 'VALIDATION_ERROR'
        },
        { status: 400 }
      );
    }

    // Validate CV file if provided
    let cvAttachment: { name: string; content: Buffer; contentType: string } | undefined;
    if (cvFile && cvFile.size > 0) {
      // Check file size (max 5MB)
      if (cvFile.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          {
            success: false,
            error: 'CV file size must be maximum 5MB',
            code: 'FILE_TOO_LARGE'
          },
          { status: 400 }
        );
      }

      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(cvFile.type)) {
        return NextResponse.json(
          {
            success: false,
            error: 'CV file must be in PDF, DOC, or DOCX format',
            code: 'INVALID_FILE_TYPE'
          },
          { status: 400 }
        );
      }

      // Convert file to buffer for email attachment
      const arrayBuffer = await cvFile.arrayBuffer();
      cvAttachment = {
        name: cvFile.name,
        content: Buffer.from(arrayBuffer),
        contentType: cvFile.type,
      };
    }

    // Prepare application data
    const applicationData: CareerApplicationData = {
      fullName: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      position: position.trim(),
      experience: experience.trim(),
      portfolio: portfolio?.trim() || undefined,
      coverLetter: coverLetter.trim(),
      appliedAt: new Date().toISOString(),
      cvFileName: cvFile?.name
    };

    // Check if database is available
    const dbAvailable = isDatabaseAvailable();
    if (!dbAvailable) {
      console.warn('Database not configured, proceeding without database storage');
    }

    let cvFileUrl: string | undefined;
    let savedApplication: any;

    try {
      // Save application to database if available
      if (dbAvailable) {
        console.log('Saving application to database for:', applicationData.fullName);
        const { data: appData, error: appError } = await CareerApplicationDB.create({
          full_name: applicationData.fullName,
          email: applicationData.email,
          phone: applicationData.phone,
          position: applicationData.position,
          experience: applicationData.experience,
          portfolio: applicationData.portfolio,
          cover_letter: applicationData.coverLetter,
          cv_file_name: applicationData.cvFileName
        });
        
        if (appError || !appData) {
          console.error('Failed to save application to database:', appError?.message);
          // Continue without database storage
        } else {
          savedApplication = appData;
          console.log('Application saved successfully with ID:', savedApplication.id);

          // Upload CV file to storage if provided
          if (cvFile && cvFile.size > 0) {
            console.log('Uploading CV file:', cvFile.name);
            const { data: uploadData, error: uploadError } = await FileUploadDB.uploadCV(cvFile, savedApplication.id);
            
            if (uploadError) {
              console.error('CV upload failed:', uploadError);
            } else if (uploadData) {
              cvFileUrl = uploadData.url;
              console.log('CV file uploaded successfully:', cvFileUrl);
            }
          }

          // Log the application submission
          await ApplicationLogDB.create({
            application_id: savedApplication.id,
            action: 'submitted',
            notes: 'Application submitted successfully'
          });
        }
      } else {
        console.log('Database not available, proceeding with email-only submission');
      }

    } catch (dbError) {
      console.error('Database operation failed:', dbError);
      
      // Clean up uploaded file if database save failed
      if (cvFileUrl && dbAvailable) {
        try {
          // Extract file path from URL for deletion
          const urlParts = cvFileUrl.split('/');
          const filePath = `cv-files/${urlParts[urlParts.length - 1]}`;
          await FileUploadDB.deleteCV(filePath);
        } catch (cleanupError) {
          console.error('Failed to cleanup uploaded file:', cleanupError);
        }
      }
      
      // Continue with email sending even if database operations failed
      console.log('Continuing with email sending despite database error');
    }

    // Check if Brevo is configured
    if (!process.env.BREVO_API_KEY) {
      console.error('Brevo API key not configured');
      return NextResponse.json(
          {
            success: false,
            error: 'Email service is currently unavailable. Please try again later.',
            code: 'EMAIL_SERVICE_UNAVAILABLE'
          },
          { status: 503 }
        );
    }

    // Send emails
    console.log('Sending career application emails for:', applicationData.fullName);
    let emailResults: any;
    
    try {
      emailResults = await sendCareerApplicationEmails(applicationData);
      
      // Log email sending results if database is available
      if (dbAvailable && savedApplication?.id) {
        await ApplicationLogDB.create({
          application_id: savedApplication.id,
          action: 'email_sent',
          notes: `Applicant email: ${emailResults.applicantEmailSent ? 'sent' : 'failed'}, Admin email: ${emailResults.adminEmailSent ? 'sent' : 'failed'}`
        });
      }
      
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      
      // Log email failure if database is available
      if (dbAvailable && savedApplication?.id) {
        await ApplicationLogDB.create({
          application_id: savedApplication.id,
          action: 'email_failed',
          notes: `Email sending failed: ${emailError}`
        });
        
        // Update application status to indicate email failure
        await CareerApplicationDB.updateStatus(savedApplication.id, 'pending', undefined, 'Email sending failed');
      }
      
      return NextResponse.json(
        {
          success: false,
          error: 'Application saved but failed to send confirmation email. Our team will contact you soon.',
          code: 'EMAIL_SEND_FAILED',
          data: {
            applicationId: savedApplication?.id || 'temp-' + Date.now(),
            submittedAt: savedApplication?.applied_at || new Date().toISOString()
          }
        },
        { status: 207 } // 207 Multi-Status: partial success
      );
    }
    
    // Check if at least one email was sent successfully
    if (!emailResults.applicantEmailSent && !emailResults.adminEmailSent) {
      console.error('Failed to send both emails');
      
      // Update application status if database is available
      if (dbAvailable && savedApplication?.id) {
        await CareerApplicationDB.updateStatus(savedApplication.id, 'pending', undefined, 'Both emails failed to send');
      }
      
      return NextResponse.json(
        {
          success: false,
          error: 'Application saved but failed to send confirmation email. Our team will contact you soon.',
          code: 'EMAIL_SEND_FAILED',
          data: {
            applicationId: savedApplication?.id || 'temp-' + Date.now(),
            submittedAt: savedApplication?.applied_at || new Date().toISOString()
          }
        },
        { status: 207 }
      );
    }

    // Log partial failures
    if (!emailResults.applicantEmailSent) {
      console.warn('Failed to send confirmation email to applicant:', applicationData.email);
    }
    if (!emailResults.adminEmailSent) {
      console.warn('Failed to send notification email to admin');
    }

    // Update application status to processed if database is available
    if (dbAvailable && savedApplication?.id) {
      await CareerApplicationDB.updateStatus(savedApplication.id, 'pending', undefined, 'Application processed successfully');

      // Log successful processing
      await ApplicationLogDB.create({
        application_id: savedApplication.id,
        action: 'processed',
        notes: 'Application processed successfully'
      });
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully! We will contact you within 1-2 business days.',
        data: {
          applicationId: savedApplication?.id || 'temp-' + Date.now(),
          applicantEmailSent: emailResults.applicantEmailSent,
          adminEmailSent: emailResults.adminEmailSent,
          submittedAt: savedApplication?.applied_at || new Date().toISOString(),
          cvFileUrl: cvFileUrl
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing career application:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred. Please try again later.',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: 'Method not allowed',
      code: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    {
      success: false,
      error: 'Method not allowed',
      code: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    {
      success: false,
      error: 'Method not allowed',
      code: 'METHOD_NOT_ALLOWED'
    },
    { status: 405 }
  );
}