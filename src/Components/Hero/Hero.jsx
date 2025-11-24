import React, { useState } from "react";
import "./Hero.css";
import videoBg from "../../Assets/stato2.mp4";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
      <div
        className="hero-content"
        style={{ opacity: isVideoLoaded ? 1 : 0, transition: "0.7s ease" }}
      >
        <p className="hero-title">Redefining how brands move</p>
        <p className="hero-text">
          Creative infrastructure for the next generation of brands.
        </p>
      </div>
    </section>
  );
};

export default Hero;
