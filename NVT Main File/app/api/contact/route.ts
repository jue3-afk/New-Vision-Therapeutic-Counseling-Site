import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const smtpHost = process.env.SMTP_HOST
const smtpPort = process.env.SMTP_PORT
const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS
const emailFrom = process.env.EMAIL_FROM || smtpUser
const emailTo = process.env.EMAIL_TO || 'dejiofor@hotmail.com'
const smtpSecure = process.env.SMTP_SECURE === 'true'

function missingConfig() {
  return !smtpHost || !smtpPort || !smtpUser || !smtpPass
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort ? Number(smtpPort) : 587,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
})

export async function POST(request: Request) {
  if (missingConfig()) {
    return NextResponse.json(
      { error: 'Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.' },
      { status: 500 },
    )
  }

  const body = await request.json()
  const { name, email, subject, message } = body as {
    name?: string
    email?: string
    subject?: string
    message?: string
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }

  try {
    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      subject: subject ? `Contact form: ${subject}` : 'Contact form message',
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject || 'No subject'}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send failed:', error)
    return NextResponse.json(
      { error: 'Unable to send your message. Please try again later.' },
      { status: 500 },
    )
  }
}
