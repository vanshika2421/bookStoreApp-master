import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email service (Gmail, SendGrid, etc.)
  auth: {
    user: process.env.EMAIL_USER, // Email from .env
    pass: process.env.EMAIL_PASS, // Password from .env
  },
});

// Route to send PDF
router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Here is your PDF!",
      text: "Thank you for your interest! Please find the PDF attached.",
      attachments: [
        {
          filename: "balancify.pdf", // Replace with the actual file name
          path: "./files/balancify.pdf", // Path to your PDF
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "PDF sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
