import { Resend } from 'resend';

// Инициализируем Resend с нашим API-ключом
const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.EMAIL_TO;

export async function POST(request: Request) {
  try {
    // 1. Получаем данные из тела запроса
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone || !message) {
      return new Response('Missing fields', { status: 400 });
    }

    if (!emailTo) {
      throw new Error('EMAIL_TO is not defined in .env.local');
    }

    // 2. Отправляем email
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Этот домен должен быть верифицирован в Resend
      to: [emailTo],
      subject: `Новая заявка от ${name} с сайта Neftiida`,
      html: `
        <p>Новая заявка с сайта!</p>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон/Мессенджер:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify(error), { status: 500 });
    }

    // 3. Отправляем успешный ответ
    return new Response(JSON.stringify(data), { status: 200 });

  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify(e), { status: 500 });
  }
}