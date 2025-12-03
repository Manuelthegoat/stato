const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// --------------------
// DATABASE CONNECTION
// --------------------
mongoose
  .connect(process.env.MONGO_URI) // <--- REMOVE deprecated options
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// --------------------
// TEST ROUTE
// --------------------
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// --------------------
// CONTACT ROUTE
// --------------------
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "contact@stato.work",
      subject,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send message" });
  }
});

// --------------------
// NEWSLETTER MODEL
// --------------------
const NewsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
});

const Newsletter = mongoose.model("Newsletter", NewsletterSchema);

// --------------------
// NEWSLETTER ROUTE
// --------------------
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const subscriber = new Newsletter({ email });
    await subscriber.save();

    res.status(200).json({ message: "Subscription successful!" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already subscribed" });
    }
    console.error(err);
    res.status(500).json({ message: "Failed to subscribe" });
  }
});

// --------------------
// START SERVER
// --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
