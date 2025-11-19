import React, { useState } from "react";
import "./Contact.css";
import Newsletter from "../Components/Newsletter/Newsletter";
import CTA from "../Components/CTA/CTA";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message");
    }
  };

  return (
    <>
    <div className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-sub">
        We’d love to hear from you. Whether you're ready to start a project or simply want to ask a
        question — reach out to us anytime.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="contact-status">{status}</p>}
    </div>
    {/* <CTA /> */}
    <Newsletter />
    </>
  );
};

export default Contact;
