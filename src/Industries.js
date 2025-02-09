import React from "react";
import './Industries.css'

const industries = [
  {
    img: "/images/card1 img.png",
    alt: "Home-repair",
    title: "Home Repair & Maintenance",
    description:
      "Our specialized solutions for home repair and maintenance businesses streamline scheduling, service tracking, and customer communications, helping you deliver top-notch service and improve client satisfaction."
  },
  {
    img: "/images/card2 img.png",
    alt: "Vehicle-maintenance",
    title: "Vehicle Maintenance",
    description:
      "Our vehicle maintenance software supports workshops and service centers by optimizing booking systems, tracking vehicle history, and ensuring efficient operations for improved customer experience."
  },
  {
    img: "/images/card3 img.png",
    alt: "Health Care",
    title: "Health Care",
    description:
      "Our software solutions empower healthcare organizations to streamline operations, enhance patient care, and ensure compliance with industry regulations."
  },
  {
    img: "/images/card4 img.png",
    alt: "Travel & Tourism",
    title: "Travel & Tourism",
    description:
      "With our cutting-edge software, we revolutionize the travel industry by providing innovative solutions for booking, reservations, and itinerary management, ensuring a seamless travel experience."
  },
  {
    img: "/images/card5 img.png",
    alt: "Productivity",
    title: "Productivity",
    description:
      "Boost your team’s efficiency and collaboration with our software tools tailored for productivity. From project management to communication, we help businesses achieve their goals faster and smarter."
  },
  {
    img: "/images/card6 img.png",
    alt: "E-commerce",
    title: "E-commerce",
    description:
      "Our robust e-commerce software enables businesses to build, manage, and optimize online stores, providing a seamless shopping experience for customers and driving sales growth."
  }
];

function Industries() {
  return (
    <div className="industries-container">
      <h2 className="industries-title">Industries we serve</h2>
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div key={index} className="industry-card">
            <img src={industry.img} alt={industry.alt} className="industry-image" />
            <h3 className="industry-title">{industry.title}</h3>
            <p className="industry-description">{industry.description}</p>
          </div> 
        ))}
      </div>
    </div>
  );
}

export default Industries;
