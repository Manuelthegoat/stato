import React, { useState } from "react";
import "./Newsletter.css";
import shape1 from "../../Assets/shape1.png";
import shape2 from "../../Assets/shape2.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    if (!email) return setStatus("Please enter an email");

    try {
      const res = await fetch("https://statoapi.onrender.com/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setStatus(data.message);
      setEmail(""); 
    } catch (err) {
      setStatus("Something went wrong");
    }
  };

  return (
    <div className="newsletter">

      <img src={shape1} className="shape-top-right" alt="" />
      <img src={shape2} className="shape-bottom-left" alt="" />

      <p className="signup-title">Sign up for the</p>

      <p className="newsletter-subtitle">
        <span>Where Brands Moves</span> <br />
        newsletter
      </p>

      <p className="newsletter-desc">
        Get regular updates and in-depth information on all things brands.
        Never spammed, never shared, just the info you need to stay ahead.
      </p>

      <div className="newsletter-input-wrapper">
        <input 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>

      {status && <p className="status-msg">{status}</p>}

      <p className="newsletter-policy">
        By submitting this form I have read and acknowledged the Privacy Policy.
      </p>
    </div>
  );
};

export default Newsletter;
