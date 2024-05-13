import axios from 'axios';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const { name, businessName, email, phone, additionalInfo, budget } = body;

  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
  const MAILGUN_URL = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

  const formData = new URLSearchParams();
  formData.append('from', `Mailgun Sandbox <postmaster@${MAILGUN_DOMAIN}>`);
  formData.append('to', 'hello@brandbadger.co.uk'); // Update with your email
  formData.append('subject', 'New Inquiry from Website');
  formData.append('text', `Name: ${name}\nBusiness Name: ${businessName}\nEmail: ${email}\nPhone: ${phone}\nAdditional Info: ${additionalInfo}\nBudget: ${budget}`);

  try {
    await axios.post(MAILGUN_URL, formData, {
      auth: {
        username: 'api',
        password: MAILGUN_API_KEY,
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return createError({ statusCode: 500, statusMessage: 'Failed to send email' });
  }
});
