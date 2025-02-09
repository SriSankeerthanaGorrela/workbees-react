import React from "react";
import "./Workbees.css";

const Workbees = () => {
  return (
    <div className="container">
      {/* Left Side */}
      <div className="left-section">
        <h1 className="heading">
          Building Exceptional Services with Collaboration
        </h1>
        <p className="description">
          At Workbees Technologies, we innovate with our flagship brands, 
          Balancers and Runer, while also empowering clients by developing 
          cutting-edge applications tailored to their needs.{" "}
          <a href="#" className="more-link">more</a>
        </p>

        {/* "We" and "To" Section */}
        <div className="we-to-section">
          <div className="we-column">
            <span className="we-title">We</span>
            <button className="custom-button">Listen Actively</button>
            <button className="custom-button">Strategise Thoughtfully</button>
            <button className="custom-button">Do Professionally</button>
          </div>
          <div className="to-column">
            <span className="to-title">To</span>
            <button className="custom-button">Exceed your Expectations</button>
          </div>
        </div>

        {/* Logos */}
        <div className="logos">
          <img src="/workbees-logo.png" alt="Workbees" />
          <img src="/balancers-logo.png" alt="Balancers" />
          <img src="/runer-logo.png" alt="Runer" />
        </div>
      </div>

      {/* Right Side */}
      <div className="right-section">
        <div className="image-container">
          <img src="/ceo-image.png" alt="Samudra Varma" className="profile-image" />
          <div className="image-caption">
            <h2>Samudra Varma</h2>
            <p>Founder & CEO -<br/> Workbees Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workbees;
