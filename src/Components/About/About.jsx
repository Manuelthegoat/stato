import React from "react";
import "./About.css";
import Shape from "../../Assets/shape.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-right center-version">
        <p className="about-text">
          At <span className="highlight">Stato</span> our approach is simple but powerful:
          tailor-made, à la carte solutions that adapt to your unique objectives.
        </p>
        <a href="/about" className="about-btn">Learn More</a>
      </div>

      {/* Shape Image */}
      <img src={Shape} alt="Shape" className="about-shape" />
    </section>
  );
};

export default About;
