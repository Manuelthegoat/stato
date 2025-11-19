import React, { useState } from 'react';
import './FAQQ.css';

const FAQQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      q: "What services does Stato offer?",
      a: "Stato offers brand strategy, visual identity design, website design, business management, creative direction, and ongoing growth support."
    },
    {
      q: "Where are you based?",
      a: "We operate remotely and work with brands worldwide"
    },
    {
      q: "How is Stato different from other agencies?",
      a: "Stato doesn’t just give you a pretty brand. We give you systems, guidelines, templates, workflows, and processes that keep your brand consistent as you scale."
    },
    {
      q: "Who do you typically work with?",
      a: "Stato partner with modern founders, growing businesses, and digital first brands that value strategic branding, clean design, and stronger operational systems."
    }
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently asked questions</h2>

      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <span>{item.q}</span>
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>

            <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
              <p>{item.a}</p>
            </div>

            {/* Separator line */}
            <div className="faq-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQQ;
