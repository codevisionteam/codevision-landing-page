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

// Generate confirmation email for applicant
export function generateApplicantConfirmationEmail(
  applicationData: CareerApplicationData
): EmailTemplate {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Konfirmasi Lamaran Kerja - Codevision</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .highlight { background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Terima Kasih atas Lamaran Anda!</h1>
        </div>
        <div class="content">
          <p>Halo <strong>${applicationData.fullName}</strong>,</p>
          
          <p>Terima kasih telah melamar untuk posisi <strong>${
            applicationData.position
          }</strong> di Codevision. Kami telah menerima lamaran Anda dan akan segera meninjau aplikasi Anda.</p>
          
          <div class="highlight">
            <h3>Detail Lamaran Anda:</h3>
            <ul>
              <li><strong>Posisi:</strong> ${applicationData.position}</li>
              <li><strong>Email:</strong> ${applicationData.email}</li>
              <li><strong>Telepon:</strong> ${applicationData.phone}</li>
              <li><strong>Pengalaman:</strong> ${
                applicationData.experience
              }</li>
              ${
                applicationData.portfolio
                  ? `<li><strong>Portfolio:</strong> <a href="${applicationData.portfolio}">${applicationData.portfolio}</a></li>`
                  : ""
              }
            </ul>
          </div>
          
          <p>Tim HR kami akan menghubungi Anda dalam 1-2 hari kerja untuk tahap selanjutnya. Pastikan untuk memeriksa email Anda secara berkala, termasuk folder spam.</p>
          
          <p>Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami di <a href="mailto:hr@codevision.com">hr@codevision.com</a>.</p>
          
          <p>Salam hangat,<br><strong>Tim HR Codevision</strong></p>
        </div>
        <div class="footer">
          <p>© 2025 Codevision. Semua hak dilindungi.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
    Terima Kasih atas Lamaran Anda!
    
    Halo ${applicationData.fullName},
    
    Terima kasih telah melamar untuk posisi ${
      applicationData.position
    } di Codevision. Kami telah menerima lamaran Anda dan akan segera meninjau aplikasi Anda.
    
    Detail Lamaran Anda:
    - Posisi: ${applicationData.position}
    - Email: ${applicationData.email}
    - Telepon: ${applicationData.phone}
    - Pengalaman: ${applicationData.experience}
    ${
      applicationData.portfolio
        ? `- Portfolio: ${applicationData.portfolio}`
        : ""
    }
    
    Tim HR kami akan menghubungi Anda dalam 1-2 hari kerja untuk tahap selanjutnya.
    
    Salam hangat,
    Tim HR Codevision
  `;

  return {
    to: [{ email: applicationData.email, name: applicationData.fullName }],
    subject: `Konfirmasi Lamaran - ${applicationData.position} di Codevision`,
    htmlContent,
    textContent,
    replyTo: {
      email: process.env.BREVO_ADMIN_EMAIL || "hr@codevision.com",
      name: "HR Codevision",
    },
  };
}

// Generate notification email for admin
export function generateAdminNotificationEmail(
  applicationData: CareerApplicationData
): EmailTemplate {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Lamaran Baru - ${applicationData.position}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .applicant-info { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #3498db; }
        .cover-letter { background: #ecf0f1; padding: 15px; border-radius: 5px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎯 Lamaran Baru Diterima</h1>
          <p>Posisi: ${applicationData.position}</p>
        </div>
        <div class="content">
          <div class="applicant-info">
            <h3>Informasi Pelamar:</h3>
            <ul>
              <li><strong>Nama:</strong> ${applicationData.fullName}</li>
              <li><strong>Email:</strong> <a href="mailto:${
                applicationData.email
              }">${applicationData.email}</a></li>
              <li><strong>Telepon:</strong> <a href="tel:${
                applicationData.phone
              }">${applicationData.phone}</a></li>
              <li><strong>Pengalaman:</strong> ${
                applicationData.experience
              }</li>
              ${
                applicationData.portfolio
                  ? `<li><strong>Portfolio:</strong> <a href="${applicationData.portfolio}" target="_blank">${applicationData.portfolio}</a></li>`
                  : ""
              }
              ${
                applicationData.resumeUrl
                  ? `<li><strong>CV/Resume:</strong> <a href="${applicationData.resumeUrl}" target="_blank">Download CV</a></li>`
                  : ""
              }
            </ul>
          </div>
          
          <div class="cover-letter">
            <h3>Cover Letter:</h3>
            <p>${applicationData.coverLetter.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p><strong>Tindakan selanjutnya:</strong> Silakan tinjau lamaran ini dan hubungi pelamar untuk tahap interview jika sesuai dengan kriteria.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
    Lamaran Baru Diterima
    
    Posisi: ${applicationData.position}
    
    Informasi Pelamar:
    - Nama: ${applicationData.fullName}
    - Email: ${applicationData.email}
    - Telepon: ${applicationData.phone}
    - Pengalaman: ${applicationData.experience}
    ${
      applicationData.portfolio
        ? `- Portfolio: ${applicationData.portfolio}`
        : ""
    }
    ${
      applicationData.resumeUrl
        ? `- CV/Resume: ${applicationData.resumeUrl}`
        : ""
    }
    
    Cover Letter:
    ${applicationData.coverLetter}
    
    Tindakan selanjutnya: Silakan tinjau lamaran ini dan hubungi pelamar untuk tahap interview jika sesuai dengan kriteria.
  `;

  return {
    to: [
      {
        email: process.env.BREVO_ADMIN_EMAIL || "hr@codevision.com",
        name: "HR Admin",
      },
    ],
    subject: `🎯 Lamaran Baru: ${applicationData.position} - ${applicationData.fullName}`,
    htmlContent,
    textContent,
    replyTo: { email: applicationData.email, name: applicationData.fullName },
  };
}

// Send career application emails (both confirmation and notification)
export async function sendCareerApplicationEmails(
  applicationData: CareerApplicationData
): Promise<{ applicantEmailSent: boolean; adminEmailSent: boolean }> {
  try {
    // Generate email templates
    const applicantEmail = generateApplicantConfirmationEmail(applicationData);
    const adminEmail = generateAdminNotificationEmail(applicationData);

    // Send emails concurrently
    const [applicantResult, adminResult] = await Promise.allSettled([
      sendEmail(applicantEmail),
      sendEmail(adminEmail),
    ]);

    const applicantEmailSent =
      applicantResult.status === "fulfilled" && applicantResult.value;
    const adminEmailSent =
      adminResult.status === "fulfilled" && adminResult.value;

    // Log results
    console.log("Email sending results:", {
      applicantEmailSent,
      adminEmailSent,
      applicantEmail: applicationData.email,
      position: applicationData.position,
    });

    return {
      applicantEmailSent,
      adminEmailSent,
    };
  } catch (error) {
    console.error("Error in sendCareerApplicationEmails:", error);
    return {
      applicantEmailSent: false,
      adminEmailSent: false,
    };
  }
}

// Send contact form email
export async function sendContactEmail(contactData: ContactFormData): Promise<boolean> {
  try {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Pesan Kontak Baru - ${contactData.subject}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .contact-info { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #3498db; }
          .message-content { background: #ecf0f1; padding: 15px; border-radius: 5px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 Pesan Kontak Baru</h1>
            <p>Subjek: ${contactData.subject}</p>
          </div>
          <div class="content">
            <div class="contact-info">
              <h3>Informasi Pengirim:</h3>
              <ul>
                <li><strong>Nama:</strong> ${contactData.name}</li>
                <li><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></li>
                <li><strong>Subjek:</strong> ${contactData.subject}</li>
              </ul>
            </div>
            
            <div class="message-content">
              <h3>Pesan:</h3>
              <p>${contactData.message.replace(/\n/g, "<br>")}</p>
            </div>
            
            <p><strong>Tindakan selanjutnya:</strong> Silakan balas email ini untuk merespons pesan dari ${contactData.name}.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
      Pesan Kontak Baru
      
      Subjek: ${contactData.subject}
      
      Informasi Pengirim:
      - Nama: ${contactData.name}
      - Email: ${contactData.email}
      - Subjek: ${contactData.subject}
      
      Pesan:
      ${contactData.message}
      
      Tindakan selanjutnya: Silakan balas email ini untuk merespons pesan dari ${contactData.name}.
    `;

    const emailTemplate: EmailTemplate = {
      to: [{ email: "hello@codevision.id", name: "Codevision Team" }],
      subject: `📧 Pesan Kontak: ${contactData.subject} - ${contactData.name}`,
      htmlContent,
      textContent,
      replyTo: { email: contactData.email, name: contactData.name },
    };

    const result = await sendEmail(emailTemplate);
    console.log('Contact email sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
}
