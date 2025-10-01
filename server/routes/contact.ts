import { RequestHandler } from "express";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Clearnode Consulting Ltd. <hello@clearnode.co.uk>",
      to: [process.env.CONTACT_EMAIL || "hello@clearnode.co.uk"],
      replyTo: email,
      subject: `New Message from ${name} on Clearnode.co.uk`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Sent from Clearnode Consulting website</em></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
      id: data?.id
    });

  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
