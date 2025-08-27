import * as brevo from "@getbrevo/brevo";

// Initialize Brevo API instance
const apiInstance = new brevo.TransactionalEmailsApi();

// Set API key
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ""
);

export interface EmailTemplate {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  textContent?: string;
  sender?: { email: string; name: string };
  replyTo?: { email: string; name?: string };
}

export interface CareerApplicationData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  portfolio?: string;
  coverLetter: string;
  resumeUrl?: string;
  appliedAt: string;
  cvFileName?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Default sender configuration
const defaultSender = {
  email: process.env.BREVO_SENDER_EMAIL || "hello@codevision.com",
  name: process.env.BREVO_SENDER_NAME || "Codevision",
};

// Send email function
export async function sendEmail(emailData: EmailTemplate): Promise<boolean> {
  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.to = emailData.to;
    sendSmtpEmail.subject = emailData.subject;
    sendSmtpEmail.htmlContent = emailData.htmlContent;
    sendSmtpEmail.textContent = emailData.textContent;
    sendSmtpEmail.sender = emailData.sender || defaultSender;

    if (emailData.replyTo) {
      sendSmtpEmail.replyTo = emailData.replyTo;
    }

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully:", result.response?.statusCode);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

// Send contact form emails (notification + auto-reply)
export async function sendContactEmails(contactData: ContactFormData): Promise<{
  notificationSent: boolean;
  autoReplySent: boolean;
}> {
  const logoBaseUrl = process.env.NEXT_PUBLIC_LOGO_BASE_URL || '/images/logo';

  // Admin notification email template
  const adminEmailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f5f5f5;
          padding: 20px;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .header {
          background-color: #1B3C53;
          padding: 30px;
          text-align: center;
        }
        
        .logo {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
        }
        
        .logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        
        .header h1 {
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .header p {
          color: #ffffff;
          opacity: 0.9;
          font-size: 14px;
        }
        
        .content {
          padding: 30px;
        }
        
        .contact-info {
          background-color: #f8f9fa;
          border-radius: 6px;
          padding: 20px;
          margin-bottom: 20px;
          border-left: 4px solid #456882;
        }
        
        .info-row {
          margin-bottom: 15px;
        }
        
        .info-row:last-child {
          margin-bottom: 0;
        }
        
        .info-label {
          font-weight: 600;
          color: #1B3C53;
          display: block;
          margin-bottom: 4px;
        }
        
        .info-value {
          color: #456882;
          word-break: break-word;
        }
        
        .message-content {
          background-color: #ffffff;
          border: 1px solid #e9ecef;
          border-radius: 6px;
          padding: 15px;
          color: #495057;
          line-height: 1.6;
          margin-top: 10px;
        }
        
        .cta-section {
          text-align: center;
          margin: 25px 0;
        }
        
        .cta-button {
          display: inline-block;
          background-color: #456882;
          color: #ffffff;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 14px;
        }
        
        .footer {
          background-color: #1B3C53;
          padding: 25px;
          text-align: center;
        }
        
        .footer-logo {
          width: 40px;
          height: 40px;
          margin: 0 auto 15px;
        }
        
        .footer-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        
        .footer p {
          color: #ffffff;
          opacity: 0.8;
          font-size: 12px;
          margin-bottom: 8px;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 10px;
          }
          
          .header, .content, .footer {
            padding: 20px;
          }
          
          .contact-info {
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo">
            <img src="${logoBaseUrl}/logo-icon.svg" alt="Codevision Logo">
          </div>
          <h1>New Contact Submission</h1>
          <p>You have received a new message from your website</p>
        </div>
        
        <div class="content">
          <div class="contact-info">
            <div class="info-row">
              <span class="info-label">Name:</span>
              <span class="info-value">${contactData.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value">${contactData.email}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Phone:</span>
              <span class="info-value">${contactData.phone}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Subject:</span>
              <span class="info-value">${contactData.subject}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Message:</span>
              <div class="message-content">
                ${contactData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div class="cta-section">
            <a href="mailto:${contactData.email}" class="cta-button">Reply to ${contactData.name}</a>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-logo">
            <img src="${logoBaseUrl}/logo-icon.svg" alt="Codevision Logo">
          </div>
          <p>&copy; 2024 Codevision. All rights reserved.</p>
          <p>This email was sent from your website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Auto-reply email template
  const autoReplyTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting us</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f5f5f5;
          padding: 20px;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .header {
          background-color: #1B3C53;
          padding: 30px;
          text-align: center;
        }
        
        .logo {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
        }
        
        .logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        
        .header h1 {
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .header p {
          color: #ffffff;
          opacity: 0.9;
          font-size: 14px;
        }
        
        .content {
          padding: 30px;
        }
        
        .message {
          background-color: #f8f9fa;
          border-radius: 6px;
          padding: 20px;
          margin-bottom: 20px;
          border-left: 4px solid #456882;
        }
        
        .message h2 {
          color: #1B3C53;
          font-size: 18px;
          margin-bottom: 10px;
        }
        
        .message p {
          color: #456882;
          margin-bottom: 10px;
        }
        
        .cta-section {
          text-align: center;
          margin: 25px 0;
        }
        
        .cta-button {
          display: inline-block;
          background-color: #456882;
          color: #ffffff;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 14px;
        }
        
        .footer {
          background-color: #1B3C53;
          padding: 25px;
          text-align: center;
        }
        
        .footer-logo {
          width: 40px;
          height: 40px;
          margin: 0 auto 15px;
        }
        
        .footer-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        
        .footer p {
          color: #ffffff;
          opacity: 0.8;
          font-size: 12px;
          margin-bottom: 8px;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 10px;
          }
          
          .header, .content, .footer {
            padding: 20px;
          }
          
          .message {
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo">
            <img src="${logoBaseUrl}/logo-icon.svg" alt="Codevision Logo">
          </div>
          <h1>Thank You for Contacting Us</h1>
          <p>We have received your message and will get back to you soon</p>
        </div>
        
        <div class="content">
          <div class="message">
            <h2>Hello ${contactData.name},</h2>
            <p>Thank you for reaching out to us. We have received your message regarding "${contactData.subject}" and our team will review it shortly.</p>
            <p>We typically respond within 24 hours during business days. If your inquiry is urgent, please feel free to call us directly.</p>
          </div>
          
          <div class="cta-section">
            <a href="https://codevision.com" class="cta-button">Visit Our Website</a>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-logo">
            <img src="${logoBaseUrl}/logo-icon.svg" alt="Codevision Logo">
          </div>
          <p>&copy; 2024 Codevision. All rights reserved.</p>
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const adminEmail: EmailTemplate = {
    to: [{ 
      email: process.env.BREVO_ADMIN_EMAIL || "hello@codevision.com", 
      name: "Codevision Admin" 
    }],
    subject: `New Contact Form Submission from ${contactData.name}`,
    htmlContent: adminEmailTemplate,
    replyTo: { email: contactData.email, name: contactData.name },
  };

  const autoReplyEmail: EmailTemplate = {
    to: [{ email: contactData.email, name: contactData.name }],
    subject: "Thank you for contacting Codevision",
    htmlContent: autoReplyTemplate,
  };

  const [notificationSent, autoReplySent] = await Promise.all([
    sendEmail(adminEmail),
    sendEmail(autoReplyEmail),
  ]);

  return { notificationSent, autoReplySent };
}

// Career application functions remain the same...
export async function sendCareerApplicationEmails(applicationData: CareerApplicationData): Promise<{
  notificationSent: boolean;
  confirmationSent: boolean;
}> {
  const [notificationSent, confirmationSent] = await Promise.all([
    sendEmail(generateAdminNotificationEmail(applicationData)),
    sendEmail(generateApplicantConfirmationEmail(applicationData)),
  ]);

  return { notificationSent, confirmationSent };
}

// Generate confirmation email for applicant
export function generateApplicantConfirmationEmail(
  applicationData: CareerApplicationData
): EmailTemplate {
  const logoBaseUrl = process.env.NEXT_PUBLIC_LOGO_BASE_URL || "/images/logo";
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Konfirmasi Lamaran Kerja - Codevision</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; 
          line-height: 1.6; 
          color: #333;
          background-color: #f5f5f5;
          padding: 20px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header { 
          background-color: #1B3C53; 
          color: #ffffff; 
          padding: 30px; 
          text-align: center;
        }
        .logo {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
        }
        .logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        .header h1 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .header p {
          font-size: 14px;
          opacity: 0.9;
        }
        .content { 
          padding: 30px;
        }
        .highlight { 
          background-color: #f8f9fa;
          border-left: 4px solid #456882;
          padding: 20px; 
          border-radius: 6px; 
          margin: 20px 0;
        }
        .highlight h3 {
          color: #1B3C53;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
        }
        .highlight ul {
          list-style: none;
          padding: 0;
        }
        .highlight li {
          padding: 8px 0;
          border-bottom: 1px solid #e9ecef;
        }
        .highlight li:last-child {
          border-bottom: none;
        }
        .highlight li strong {
          color: #1B3C53;
          font-weight: 600;
          display: inline-block;
          min-width: 100px;
        }
        .cta-section {
          background-color: #f8f9fa;
          border-radius: 6px;
          padding: 20px;
          margin: 20px 0;
          text-align: center;
        }
        .cta-button {
          display: inline-block;
          background-color: #456882;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          margin-top: 10px;
        }
        .footer { 
          background-color: #1B3C53;
          text-align: center; 
          padding: 25px;
          color: #ffffff; 
        }
        .footer-logo {
          width: 40px;
          height: 40px;
          margin: 0 auto 15px;
        }
        .footer-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        .footer p {
          font-size: 12px;
          opacity: 0.8;
          margin-bottom: 8px;
        }
        @media (max-width: 600px) {
          .header, .content, .footer { padding: 20px; }
          .highlight { padding: 15px; }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo">
            <img src="${logoBaseUrl}/logo-icon.svg" alt="Codevision Logo" />
          </div>
          <h1>Terima Kasih atas Lamaran Anda!</h1>
          <p>Kami sangat menghargai minat Anda untuk bergabung dengan tim kami</p>
        </div>
        <div class="content">
          <p>Halo <strong>${applicationData.fullName}</strong>,</p>
          
          <p>Terima kasih telah melamar untuk posisi <strong>${applicationData.position}</strong> di Codevision. Kami telah menerima lamaran Anda dan akan segera meninjau aplikasi Anda dengan seksama.</p>
          
          <div class="highlight">
            <h3>📋 Detail Lamaran Anda</h3>
            <ul>
              <li><strong>Posisi:</strong> ${applicationData.position}</li>
              <li><strong>Email:</strong> ${applicationData.email}</li>
              <li><strong>Telepon:</strong> ${applicationData.phone}</li>
              <li><strong>Pengalaman:</strong> ${applicationData.experience}</li>
              ${applicationData.portfolio ? `<li><strong>Portfolio:</strong> ${applicationData.portfolio}</li>` : ""}
            </ul>
          </div>
          
          <div class="cta-section">
            <h3 style="color: #1B3C53; margin-bottom: 10px;">🚀 Langkah Selanjutnya</h3>
            <p style="color: #456882; margin-bottom: 15px;">Tim HR kami akan menghubungi Anda dalam 1-2 hari kerja untuk tahap selanjutnya.</p>
            <a href="mailto:hello@codevision.id" class="cta-button">Hubungi Kami</a>
          </div>
          
          <p>Pastikan untuk memeriksa email Anda secara berkala, termasuk folder spam. Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami.</p>
          
          <p style="margin-top: 25px; color: #1B3C53; font-weight: 600;">
            Salam hangat,<br>
            <span style="color: #456882;">Tim HR Codevision</span>
          </p>
        </div>
        <div class="footer">
          <div class="footer-logo">
            <img src="${logoBaseUrl}/logo-icon.svg" alt="Codevision" />
          </div>
          <p>© 2025 Codevision. Semua hak dilindungi.</p>
          <p>Email ini dikirim secara otomatis. Mohon jangan membalas email ini.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return {
    to: [{ email: applicationData.email, name: applicationData.fullName }],
    subject: `Konfirmasi Lamaran - ${applicationData.position} di Codevision`,
    htmlContent,
    replyTo: {
      email: process.env.BREVO_ADMIN_EMAIL || "hello@codevision.com",
      name: "HR Codevision",
    },
  };
}

// Generate notification email for admin
export function generateAdminNotificationEmail(
  applicationData: CareerApplicationData
): EmailTemplate {
  const logoBaseUrl = process.env.NEXT_PUBLIC_LOGO_BASE_URL || "/images/logo";
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Lamaran Kerja Baru - Codevision</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; 
          line-height: 1.6; 
          color: #333;
          background-color: #f5f5f5;
          padding: 20px;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header { 
          background-color: #1B3C53; 
          color: #ffffff; 
          padding: 30px; 
          text-align: center;
        }
        .logo {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
        }
        .logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        .header h1 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .content { 
          padding: 30px;
        }
        .applicant-info {
          background-color: #f8f9fa;
          border-left: 4px solid #456882;
          padding: 20px; 
          border-radius: 6px; 
          margin: 20px 0;
        }
        .info-row {
          margin-bottom: 15px;
        }
        .info-row:last-child {
          margin-bottom: 0;
        }
        .info-label {
          font-weight: 600;
          color: #1B3C53;
          display: block;
          margin-bottom: 4px;
        }
        .info-value {
          color: #456882;
          word-break: break-word;
        }
        .cover-letter {
          background-color: #ffffff;
          border: 1px solid #e9ecef;
          border-radius: 6px;
          padding: 15px;
          color: #495057;
          line-height: 1.6;
          margin-top: 10px;
        }
        .cta-section {
          text-align: center;
          margin: 25px 0;
        }
        .cta-button {
          display: inline-block;
          background-color: #456882;
          color: #ffffff;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 500;
          margin: 0 5px;
        }
        .footer { 
          background-color: #1B3C53;
          text-align: center; 
          padding: 25px;
          color: #ffffff; 
        }
        .footer-logo {
          width: 40px;
          height: 40px;
          margin: 0 auto 15px;
        }
        .footer-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        .footer p {
          font-size: 12px;
          opacity: 0.8;
          margin-bottom: 8px;
        }
        @media (max-width: 600px) {
          .header, .content, .footer { padding: 20px; }
          .applicant-info { padding: 15px; }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo">
            <img src="${logoBaseUrl}/logo-icon.svg" alt="Codevision Logo" />
          </div>
          <h1>Lamaran Kerja Baru</h1>
          <p>Ada lamaran baru untuk posisi ${applicationData.position}</p>
        </div>
        <div class="content">
          <div class="applicant-info">
            <div class="info-row">
              <span class="info-label">Nama Lengkap:</span>
              <span class="info-value">${applicationData.fullName}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value">${applicationData.email}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Telepon:</span>
              <span class="info-value">${applicationData.phone}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Posisi:</span>
              <span class="info-value">${applicationData.position}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Pengalaman:</span>
              <span class="info-value">${applicationData.experience}</span>
            </div>
            ${applicationData.portfolio ? `
            <div class="info-row">
              <span class="info-label">Portfolio:</span>
              <span class="info-value">${applicationData.portfolio}</span>
            </div>
            ` : ""}
            <div class="info-row">
              <span class="info-label">Cover Letter:</span>
              <div class="cover-letter">
                ${applicationData.coverLetter.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div class="cta-section">
            <a href="mailto:${applicationData.email}" class="cta-button">Reply to Applicant</a>
            ${applicationData.resumeUrl ? `<a href="${applicationData.resumeUrl}" class="cta-button">Download CV</a>` : ""}
          </div>
        </div>
        <div class="footer">
          <div class="footer-logo">
            <img src="${logoBaseUrl}/logo-icon.svg" alt="Codevision" />
          </div>
          <p>© 2025 Codevision. Semua hak dilindungi.</p>
          <p>Email ini dikirim dari sistem career portal.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return {
    to: [{ 
      email: process.env.BREVO_ADMIN_EMAIL || "hello@codevision.com", 
      name: "Codevision Admin" 
    }],
    subject: `Lamaran Baru: ${applicationData.position} - ${applicationData.fullName}`,
    htmlContent,
    replyTo: { email: applicationData.email, name: applicationData.fullName },
  };
}
