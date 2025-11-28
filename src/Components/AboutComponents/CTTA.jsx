/* global Calendly */
import React, { useState, useEffect } from "react";
import "./CTTA.css";

const CTTA = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="ctta">
      <h2 className="ctta-title">
        Let’s create something
        <br /> <span>extraordinary</span>
      </h2>

      <p className="ctta-sub">
        Ready to elevate your brand? We’re just a conversation away
      </p>

      <a
        onClick={(e) => {
          e.preventDefault();
          Calendly.initPopupWidget({
            url: "https://calendly.com/contact-stato/30min",
          });
        }}
        className="ctta-btn"
      >
        Start Your Project
      </a>
    </div>
  );
};

export default CTTA;
