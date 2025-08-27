import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmails } from '@/lib/brevo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validasi input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    // Send email notifications (both to admin and auto-reply to user)
    const { notificationSent, autoReplySent } = await sendContactEmails({
      name,
      email,
      subject,
      message,
      phone: ''
    });
    
    if (!notificationSent && !autoReplySent) {
      return NextResponse.json(
        { error: "Failed to send email notifications" },
        { status: 500 }
      );
    }
    
    // Log partial success if only one email type failed
    if (!notificationSent) {
      console.warn("Admin notification email failed to send");
    }
    if (!autoReplySent) {
      console.warn("Auto-reply email failed to send");
    }

    return NextResponse.json(
      { 
        message: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.',
        emailStatus: {
          notificationSent,
          autoReplySent
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}