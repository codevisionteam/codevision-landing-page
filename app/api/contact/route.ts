import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/brevo';

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

    // Kirim email menggunakan Brevo
    await sendContactEmail({
      name,
      email,
      subject,
      message
    });

    return NextResponse.json(
      { message: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.' },
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