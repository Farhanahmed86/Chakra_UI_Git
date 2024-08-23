// src/api/send-email.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const Send_email = async (req, res) => {
  const { name, email, message } = req.body;

  console.log(name, email, message, "backend req");

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,  
    },
  });

  try {
    await transporter.sendMail({
      from: 'brad@mg.honesthomehub.com  📧 Honest Home Hub',  
      to: email,  
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { Send_email };
