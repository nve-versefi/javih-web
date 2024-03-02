// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
    const { nombre, telefono, email, contexto, termsAndConditions, privacyPolicy, marketingConsent } = req.body;

    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, 
      auth: {
        user: 'nicove21@gmail.com', // your SMTP username
        pass: 'faei kbzr ytjo oaxt', // your SMTP password
      },
    });

    // Send mail to yourself
    let mailOptionsSelf = {
      from: '"Your Website" <nicove21@gmail.com>', // sender address
      to: 'nicove21@gmail.com', // list of receivers (your own email)
      subject: 'New Contact Form Submission', // Subject line
      html: `
        <p>You have a new contact form submission.</p>
        <p><b>Name:</b> ${nombre}</p>
        <p><b>Phone:</b> ${telefono || 'Not provided'}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Context:</b> ${contexto}</p>
        <p><b>Accepted Terms:</b> ${termsAndConditions ? 'Yes' : 'No'}</p>
        <p><b>Accepted Privacy Policy:</b> ${privacyPolicy ? 'Yes' : 'No'}</p>
        <p><b>Consent to Marketing:</b> ${marketingConsent ? 'Yes' : 'No'}</p>
      `, // HTML body content
    };

    // Send mail to the person who filled the form
    let mailOptionsUser = {
      from: '"Your Website" <nicove21@gmail.com>', // sender address
      to: email, // receiver, email from the form
      subject: 'Thank you for contacting us', // Subject line
      html: `
        <p>Hello ${nombre},</p>
        <p>Thank you for contacting us. We have received your message and will be in touch shortly.</p>
        <p>Best regards,</p>
        <p>Your Website Team</p>
      `, // HTML body content
    };

    try {
      // Send mail to yourself
      await transporter.sendMail(mailOptionsSelf);
      // Send mail to the user
      await transporter.sendMail(mailOptionsUser);
      res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
