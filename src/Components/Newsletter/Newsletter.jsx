import React from "react";
import "./Newsletter.css";
import shape1 from "../../Assets/shape1.png";
import shape2 from "../../Assets/shape2.png";

const Newsletter = () => {
  return (
    <div className="newsletter">
      
      {/* Decorative Shapes */}
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
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>

      <p className="newsletter-policy">
        By submitting this form I have read and acknowledged the Privacy Policy.
      </p>
    </div>
  );
};

export default Newsletter;
