/* global Calendly */
import React, { useState, useEffect } from "react";
import './CTA.css'

const CTA = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }, []);
  return (
    <div className="cta-section">
      <h2 className="cta-title">Ready to Elevate Your Brand?</h2>
      <p className="cta-text">
        Let’s discuss how we can help you achieve your marketing goals and build a brand that stands out.
      </p>
      <a   onClick={(e) => {
              e.preventDefault();
              Calendly.initPopupWidget({
                url: "https://calendly.com/contact-stato/30min",
              });
            }} className="cta-btn">Let's Talk</a>
    </div>
  )
}

export default CTA
