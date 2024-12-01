import nodemailer from "nodemailer";
import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    console.log("Received request body: ", req.body);

    // Database insertion
    const connection = await createConnection();
    try {
      // Insert the data into the database
      await connection.execute(
        "INSERT INTO contacts (Name, email, message) VALUES (?, ?, ?)",
        [name, email, message]
      );
      console.log("Data inserted successfully into the contacts table.");

      // Email sending
      let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_HOST_USER, // SMTP username
          pass: process.env.EMAIL_HOST_PASSWORD, // SMTP password
        },
      });

      console.log("Transporter created: ", transporter);

      try {
        let info = await transporter.sendMail({
          from: `"${name}" <${email}>`, // Sender's name and email
          to: "cedrickmanzii0@gmail.com", // Your email address
          subject: "Inquiry purpose", // Subject line
          text: message, // Plain text message
        });

        console.log("Email sent successfully: ", info);
        res.status(200).json({ message: "Success" });
      } catch (emailError) {
        console.error("Error occurred while sending email: ", emailError);
        res.status(500).json({
          message: "Error occurred while sending email",
          error: emailError.message,
        });
      }
    } catch (dbError) {
      console.error("Error occurred during database insertion: ", dbError);
      res.status(500).json({
        message: "Error occurred during database insertion",
        error: dbError.message,
      });
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
