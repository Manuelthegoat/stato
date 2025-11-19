import React from "react";
import "./Hero.css";
import videoBg from "../../Assets/stato.mp4";

const Hero = () => {
  return (
    <section className="hero">

      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-title">Redefining how brands move</p>
        <p className="hero-text">
          Creative infrastructure for the next generation of brands.
        </p>
      </div>
    </section>
  );
};

export default Hero;
