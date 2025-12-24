import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASS
  }
});

// Reusable function
export const sendEmail = async ({ email, subject, html }) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL, // important
      to: email,
      subject,
      html
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email send failed:", error);
  }
};
