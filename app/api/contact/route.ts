import { NextResponse } from 'next/server'

const resendApiKey = process.env.RESEND_API_KEY
const emailFrom = process.env.EMAIL_FROM || 'New Vision Contact <no-reply@example.com>'
const emailTo = process.env.EMAIL_TO || 'dejiofor@hotmail.com'

function missingConfig() {
  return !resendApiKey || !emailFrom || !emailTo
}

async function sendMailWithResend({
  recipient,
  subject,
  html,
  replyTo,
}: {
  recipient: string
  subject: string
  html: string
  replyTo?: string
}) {
  const body = {
    from: emailFrom,
    to: recipient,
    subject,
    html,
  }

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!resp.ok) {
    const text = await resp.text()
    throw new Error(`Resend send failed: ${resp.status} ${text}`)
  }
}

export async function POST(request: Request) {
  if (missingConfig()) {
    return NextResponse.json(
      {
        error:
          'Mail service is not configured. Please set RESEND_API_KEY, EMAIL_FROM, and EMAIL_TO.',
      },
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

  const mailSubject = subject ? `Contact form: ${subject}` : 'Contact form message'
  const html = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject || 'No subject'}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`

  try {
    await sendMailWithResend({
      recipient: emailTo,
      subject: mailSubject,
      html,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send failed:', error)
    const message = error instanceof Error ? error.message : 'Unable to send your message. Please try again later.'
    return NextResponse.json(
      { error: message },
      { status: 500 },
    )
  }
}
