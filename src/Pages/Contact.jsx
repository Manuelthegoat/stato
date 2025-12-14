import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      <Helmet>
        {/* Primary SEO */}
        <title>Contact Stato | Start Your Branding Project</title>
        <meta
          name="description"
          content="Get in touch with Stato Creative Agency. Start your branding or digital project today and let’s create impactful brand experiences."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://stato.work/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Stato | Creative Agency" />
        <meta
          property="og:description"
          content="Reach out to Stato for brand strategy, digital services, and creative solutions."
        />
        <meta property="og:url" content="https://stato.work/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Stato" />
        <meta
          name="twitter:description"
          content="Start your project with Stato today. Get in touch for branding and digital services."
        />
      </Helmet>

      <div className="contact">
        <h1 className="contact-title">Get in Touch</h1>
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

      {/* CTA can be added if needed */}
      <Newsletter />
    </>
  );
};

export default Contact;
