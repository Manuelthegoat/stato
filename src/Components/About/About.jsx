import React from "react";
import "./About.css";
import Shape from "../../Assets/shape.png"; // make sure path is correct

const About = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <p className="about-small">About Us</p>
      </div>

      <div className="about-right">
        <p className="about-text">
          At <span className="highlight">Stato</span> our approach is simple but powerful: tailor-made, à la carte solutions that adapt to your unique objectives.
        </p>
        <button className="about-btn">Learn More</button>
      </div>

      {/* Shape Image */}
      <img src={Shape} alt="Shape" className="about-shape" />
    </section>
  );
};

export default About;
