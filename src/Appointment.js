import React from "react";
import "./appointment.css";

const Appointment = () => {
  return (
    <>
      {/* Appointment Section */}
      <div className="appointment-container">
        {/* Left Side Content */}
        <div className="left-content">
          <h1 className="title">Get Started with Workbees</h1>
          <p className="description">
            Join thousands of happy customers who trust our car maintenance and
            cleaning services with Balancers. We provide professional, scheduled
            services to keep your vehicle in pristine condition. If you’re a
            business, enhance your customer engagement and referral management
            with Runer.
          </p>

          <div className="features">
            <div className="feature-item">
              <img
                src="professional-service.png"
                alt="Professional Service"
                className="feature-icon"
              />
              <div>
                <h3 className="feature-heading">100% Professional Service</h3>
                <p className="feature-description">
                  Delivered by trained and verified professionals.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <img
                src="quality-assured.png"
                alt="Quality Assured"
                className="feature-icon"
              />
              <div>
                <h3 className="feature-heading">Quality Assured</h3>
                <p className="feature-description">
                  Our services are backed by a dedicated quality check process.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <img
                src="reliable-convenient.png"
                alt="Reliable & Convenient"
                className="feature-icon"
              />
              <div>
                <h3 className="feature-heading">Reliable & Convenient</h3>
                <p className="feature-description">
                  Schedule and manage services easily through our apps.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="right-form">
          <h3 className="form-title">GET IN TOUCH</h3>
          <h2 className="form-heading">Make an appointment</h2>

          <form className="appointment-form">
            <div className="input-group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Mobile number" />
            <input type="email" placeholder="Email address" />
            <textarea placeholder="Message"></textarea>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-container">
        <div className="footer-content">
          {/* Left Side - Logo and About */}
          <div className="footer-left">
            <div className="logo-container">
              <img
                src="workbees1-logo.png"
                alt="Workbees Logo"
                className="workbees-logo"
              />
              <h2 className="workbees-heading">Workbees</h2>
            </div>
            <p className="footer-description">
              We are your trusted partner in providing professional vehicle and
              home maintenance services. Our services include scheduled car
              cleaning, car care products, and comprehensive home cleaning
              solutions. We also offer cutting-edge referral marketing tools for
              businesses with our Runer app.
            </p>
            <div className="social-icons">
              <img src="instagram.png" alt="Instagram" />
              <img src="facebook.png" alt="Facebook" />
              <img src="twitter.png" alt="Twitter" />
              <img src="youtube.png" alt="YouTube" />
            </div>
          </div>

          {/* Center - Links */}
          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Terms of services</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4>Solutions</h4>
              <ul>
                <li>Vehicle maintenance</li>
                <li>Home cleaning</li>
                <li>Referral Marketing</li>
              </ul>
            </div>
            <div>
              <h4>Get in touch</h4>
              <ul>
                <li>Contact us</li>
                <li>Support</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>

          {/* Right Side - App Download */}
<div className="footer-download">
  <h4>Download our Apps</h4>
  <div className="download-buttons">
    <button className="download-button">
      For Balancers
      <span className="arrow-circle">
        <img src="/arrow-icon.png" alt="Download Arrow" />
      </span>
    </button>
    <button className="download-button">
      For Balancers
      <span className="arrow-circle">
        <img src="/arrow-icon.png" alt="Download Arrow" />
      </span>
    </button>
  </div>
</div>

        </div>

        <div className="footer-bottom">
        <hr className="footer-divider" />
          <p>Copyright © Workbees. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Appointment;