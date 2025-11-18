import React, { useState } from 'react';
import './FAQQ.css';

const FAQQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      q: "What services does Stato offer?",
      a: "We provide branding, digital marketing, content creation, brand strategy, and more to help businesses grow."
    },
    {
      q: "Where are you based?",
      a: "Project timelines vary depending on scope, but most branding and marketing projects take 2–8 weeks."
    },
    {
      q: "Who do you typically work with?",
      a: "Yes! We love working with startups and helping them create strong, memorable brands from day one."
    },
    {
      q: "How do I get started?",
      a: "Simply contact us or book a call, and our team will walk you through the full process."
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
