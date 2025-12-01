/* global Calendly */
import React, { useState, useEffect } from "react";
import "./Countdown.css";
import videoBg from "../../Assets/stato2.mp4";
import logo from "../../Assets/stato-logo1.1.png";

const Countdown = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Countdown logic
  const targetDate = new Date("2025-12-07T23:59:59");
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
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

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Countdown content */}
      <div className={`countdown-container ${isVideoLoaded ? "loaded" : ""}`}>
        <img src={logo} alt="Logo" className="countdown-logo" />

        <div className="countdown">
          <div className="time-box">
            <span className="num">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <div className="time-box">
            <span className="num">{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="time-box">
            <span className="num">{timeLeft.minutes}</span>
            <span className="label">Mins</span>
          </div>
          <div className="time-box">
            <span className="num">{timeLeft.seconds}</span>
            <span className="label">Secs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
