import { NextResponse } from 'next/server';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '6LcdQJ8rAAAAAPJU0KTQqxafgfIUl55apQPn5Vt2';


export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'No reCAPTCHA token provided' },
        { status: 400 }
      );
    }

    // Verify the token with Google's reCAPTCHA API
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`;
    
    const response = await fetch(verificationUrl, {
      method: 'POST',
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json(
        { success: true, message: 'reCAPTCHA verified successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA verification failed', errors: data['error-codes'] },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
