import React from "react";
import "./Values.css";
import valueIcon from "../../Assets/valueicon.png";
import valueIcon2 from "../../Assets/value2.png";
import valueIcon3 from "../../Assets/value3.png";
import valueIcon4 from "../../Assets/value4.png";

const Values = () => {
  const valuesData = [
    {
      title: "Innovation First",
      img: valueIcon,
      text: "We push boundaries and explore new ideas to create groundbreaking campaigns that set trends.",
    },
    {
      title: "Strategic Thinking",
      img: valueIcon2,
      text: "Every decision is backed by research, data and a deep understanding of your market.",
    },
    {
      title: "Collaborative Spirit",
      img: valueIcon3,
      text: "We believe the best work happens when we partner closely with our clients as one team.",
    },
    {
      title: "Agile Execution",
      img: valueIcon4,
      text: "Fast-paced yet meticulous. we deliver high-quality work time, every time.",
    },
  ];

  return (
    <section className="values-section">
      <div className="values-container">
        <h2 className="values-title">Our Values</h2>
        <p className="values-subtitle">
          The principles that guide our work and relationships with clients
        </p>

        <div className="values-grid">
          {valuesData.map((item, i) => (
            <div className="value-card" key={i}>
              <img src={item.img} alt="value icon" className="value-icon" />
              <h3 className="value-card-title">{item.title}</h3>
              <p className="value-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
