import React, { useState } from "react";
import "./faq.css";

const faqData = [
  { question: "What is Balancers, and how does it work?", answer: "Answer for this question goes here..." },
  { question: "What makes Balancers different from daily car cleaning services?", answer: "Answer for this question goes here..." },
  { question: "How does the Runer app help in marketing for car showrooms?", answer: "Runer is a marketing tool designed for car showroom executives to engage potential customers. It allows executives to send referrals directly to car owners, making the process more efficient. The app tracks referrals and rewards executives for successful leads, helping to boost customer engagement." },
  { question: "Can I track my car's service status on Balancers?", answer: "Answer for this question goes here..." },
  { question: "How does Runer support businesses with customer referrals?", answer: "Answer for this question goes here..." },
  { question: "How do I earn rewards as a Runer app user?", answer: "Answer for this question goes here..." }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">FAQs</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
