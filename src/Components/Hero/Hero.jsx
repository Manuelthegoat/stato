/* global Calendly */
import React, { useState, useEffect } from "react";
import "./Hero.css";
import videoBg from "../../Assets/stato2.mp4";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  // Load Calendly script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="hero">
      {/* Preloader */}
      {!isVideoLoaded && (
        <div className="hero-preloader">
          <div className="loader"></div>
        </div>
      )}

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      {/* Hide content until video is loaded */}
     <div className={`hero-content ${isVideoLoaded ? "loaded" : ""}`}>

        <p className="hero-title">
          Redefining how <span className="doodle-word">brands</span> move
        </p>

        <p className="hero-text">
          Creative infrastructure for the next generation of brands.
        </p>
        <div className="hero-buttons">
          <a
            onClick={(e) => {
              e.preventDefault();
              Calendly.initPopupWidget({
                url: "https://calendly.com/contact-stato/30min",
              });
            }}
            className="hero-btn primary"
          >
            Book a Call
          </a>
          <a href="/about" className="hero-btn secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
