import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./FAQQ.css";

const FAQQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      q: "What services does Stato offer?",
      a: "Stato offers brand strategy, visual identity design, website design, business management, creative direction, and ongoing growth support."
    },
    {
      q: "Where are you based?",
      a: "We operate remotely and work with brands worldwide."
    },
    {
      q: "How is Stato different from other agencies?",
      a: "Stato doesn’t just give you a pretty brand. We provide systems, guidelines, templates, workflows, and processes that keep your brand consistent as you scale."
    },
    {
      q: "Who do you typically work with?",
      a: "Stato partners with modern founders, growing businesses, and digital-first brands that value strategic branding, clean design, and strong operational systems."
    }
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema for Google */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": questions.map((item) => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })}
        </script>
      </Helmet>

      <section className="faq-section">
        <h1 className="faq-title">Frequently Asked Questions</h1>

        <div className="faq-list">
          {questions.map((item, index) => (
            <article key={index} className="faq-item">
              <h2
                className="faq-question"
                onClick={() => toggle(index)}
              >
                <span>{item.q}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </h2>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <p>{item.a}</p>
              </div>

              <div className="faq-line"></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQQ;
