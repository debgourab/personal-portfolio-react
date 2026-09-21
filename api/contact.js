const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fields = {
  name: { label: 'Name', max: 90 },
  email: { label: 'Email', max: 140 },
  subject: { label: 'Subject', max: 140 },
  message: { label: 'Message', max: 2500 },
};

function normalizePayload(body) {
  let payload = body || {};

  if (typeof body === 'string') {
    try {
      payload = JSON.parse(body || '{}');
    } catch {
      const error = new Error('Invalid JSON request body.');
      error.statusCode = 400;
      throw error;
    }
  }

  return Object.fromEntries(
    Object.keys(fields).map((field) => [field, String(payload[field] || '').trim()]),
  );
}

function validate(values) {
  const errors = {};

  Object.entries(fields).forEach(([field, config]) => {
    if (!values[field]) {
      errors[field] = `${config.label} is required.`;
    } else if (values[field].length > config.max) {
      errors[field] = `${config.label} must be ${config.max} characters or fewer.`;
    }
  });

  if (values.email && !emailPattern.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return errors;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildMessage(values) {
  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Subject: ${values.subject}`,
    '',
    values.message,
  ].join('\n');

  const html = `
    <h2>New portfolio contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(values.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(values.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(values.message).replace(/\n/g, '<br>')}</p>
  `;

  return { text, html };
}

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.CONTACT_ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

async function sendEmail(values) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    throw new Error('Email service is not configured.');
  }

  const message = buildMessage(values);
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: values.email,
      subject: `Portfolio contact: ${values.subject}`,
      text: message.text,
      html: message.html,
    }),
  });
  const responseBody = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.error('Resend email failed', response.status, responseBody);
    throw new Error('Email service rejected the message.');
  }
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(405).json({ ok: false, message: 'Only POST requests are allowed.' });
    return;
  }

  try {
    const values = normalizePayload(req.body);
    const errors = validate(values);

    if (Object.keys(errors).length) {
      res.status(400).json({
        ok: false,
        message: 'Please fix the highlighted fields.',
        errors,
      });
      return;
    }

    await sendEmail(values);
    res.status(200).json({
      ok: true,
      message: 'Thanks, your message was sent successfully.',
    });
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({
      ok: false,
      message:
        error instanceof Error && error.message === 'Invalid JSON request body.'
          ? 'Invalid JSON request body.'
          : error instanceof Error && error.message === 'Email service is not configured.'
            ? 'Contact form is not configured yet. Add the email environment variables in Vercel.'
            : 'Message could not be sent right now. Please try again later.',
    });
  }
}
