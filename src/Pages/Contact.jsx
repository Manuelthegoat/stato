import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <p className="contact-sub">
        We’d love to hear from you. Whether you're ready to start a project or simply want to ask a
        question — reach out to us anytime.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
