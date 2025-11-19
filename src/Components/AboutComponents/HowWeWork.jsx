import React from "react";
import "./HowWeWork.css";

const HowWeWork = () => {
  return (
    <section className="hww-section">
      <div className="hww-container">
        <h2 className="hww-title">How We Work</h2>
        <p className="hww-subtitle">
          Our proven process transforms ambitious ideas into powerful brand
          experiences
        </p>

        <div className="hww-list">
          <div className="hww-item">
            <h3 className="hww-item-title">How We Work</h3>
            <p className="hww-item-text">
              Deep dive into your brand, audience
              <br />
              and market to uncover unique
              <br />
              opportunities.
            </p>
          </div>

          <div className="hww-item">
            <h3 className="hww-item-title">Strategize</h3>
            <p className="hww-item-text">
              Craft a comprehensive roadmap that
              <br />
              aligns creative vision with business
              <br />
              goals.
            </p>
          </div>

          <div className="hww-item">
            <h3 className="hww-item-title">Create</h3>
            <p className="hww-item-text">
              Bring ideas to life with stunning design
              <br />
              and compelling storytelling.
            </p>
          </div>

          <div className="hww-item">
            <h3 className="hww-item-title">Launch</h3>
            <p className="hww-item-text">
              Deploy your brand with impact and
              <br />
              measure success every step of the
              <br />
              way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
