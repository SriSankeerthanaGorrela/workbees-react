import React from "react";
import styles from "./appointment.module.css";

const Appointment = () => {
  return (
    <>
      <div className={styles.appointmentcontainer}>
        <div className={styles.leftcontent}>
          <h1 className={styles.title}>Get Started with Workbees</h1>
          <p className={styles.description}>
            Join thousands of happy customers who trust our car maintenance and
            cleaning services with Balancers. We provide professional, scheduled
            services to keep your vehicle in pristine condition. If you’re a
            business, enhance your customer engagement and referral management
            with Runer.
          </p>

          <div className={styles.features}>
            <div className={styles.featureitem}>
              <img
                src="professional-service.png"
                alt="Professional Service"
                className={styles.featureicon}
              />
              <div>
                <h3 className={styles.featureheading}>100% Professional Service</h3>
                <p className={styles.featuredescription}>
                  Delivered by trained and verified professionals.
                </p>
              </div>
            </div>
            <div className={styles.featureitem}>
              <img
                src="quality-assured.png"
                alt="Quality Assured"
                className={styles.featureicon}
              />
              <div>
                <h3 className={styles.featureheading}>Quality Assured</h3>
                <p className={styles.featuredescription}>
                  Our services are backed by a dedicated quality check process.
                </p>
              </div>
            </div>
            <div className={styles.featureitem}>
              <img
                src="reliable-convenient.png"
                alt="Reliable & Convenient"
                className={styles.featureicon}
              />
              <div>
                <h3 className={styles.featureheading}>Reliable & Convenient</h3>
                <p className={styles.featuredescription}>
                  Schedule and manage services easily through our apps.
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className={styles.rightform}>
          <h3 className={styles.formtitle}>GET IN TOUCH</h3>
          <h2 className={styles.formheading}>Make an appointment</h2>

          <form className={styles.appointmentform}>
            <div className={styles.inputgroup}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Mobile number" />
            <input type="email" placeholder="Email address" />
            <textarea placeholder="Message"></textarea>

            <button type="submit" className={styles.submitbutton}>
              Submit
            </button>
          </form>
        </div>
      </div>

      
      <footer className={styles.footercontainer}>
        <div className={styles.footercontent}>
         
          <div className={styles.footerleft}>
            <div className={styles.logocontainer}>
              <img
                src="workbees1-logo.png"
                alt="Workbees Logo"
                className={styles.workbeeslogo}
              />
              <h2 className={styles.workbeesheading}>Workbees</h2>
            </div>
            <p className={styles.footerdescription}>
              We are your trusted partner in providing professional vehicle and
              home maintenance services. Our services include scheduled car
              cleaning, car care products, and comprehensive home cleaning
              solutions. We also offer cutting-edge referral marketing tools for
              businesses with our Runer app.
            </p>
            <div className={styles.socialicons}>
              <img src="instagram.png" alt="Instagram" />
              <img src="facebook.png" alt="Facebook" />
              <img src="twitter.png" alt="Twitter" />
              <img src="youtube.png" alt="YouTube" />
            </div>
          </div>

         
          <div className={styles.footerlinks}>
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

          
<div className={styles.footerdownload}>
  <h4>Download our Apps</h4>
  <div className={styles.downloadbuttons}>
    <button className={styles.downloadbutton}>
      For Balancers
      <span className={styles.arrowcircle}>
        <img src="/arrow-icon.png" alt="Download Arrow" />
      </span>
    </button>
    <button className={styles.downloadbutton}>
      For Balancers
      <span className={styles.arrowcircle}>
        <img src="/arrow-icon.png" alt="Download Arrow" />
      </span>
    </button>
  </div>
</div>
</div>

        <div className={styles.footerbottom}>
        <hr className={styles.footerdivider} />
          <p>Copyright © Workbees. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Appointment;