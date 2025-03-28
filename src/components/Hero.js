import React from 'react';
import styles from './Hero.module.css';

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
      <h1 className={styles.h1}>
          We do more for your Technical <span className={styles.success}>Success</span>
        </h1>
        <h2 className={styles.h2}>
          We're <span className={styles.highlight}>Technical</span> Bees as well
        </h2>
        
  
        <div className={styles.arrowbox}>
              <span className={styles.arrow}>➜</span>
              <span className={styles.clientslabel}>Clients</span>
            </div>

        
        <div className={styles.arrowboxright1}>
              <span className={styles.clientslabel1}>Workbees</span>
              <span className={styles.arrow1}>➜</span>
            </div>

      <p className={styles.description}>
        We’re a full-cycle web and mobile application development company that creates software solutions tailored to the demands of businesses.
      </p>

      <div className={styles.imageContainer}>
        <img src="./images/Device.png" alt="Dashboard UI" className={styles.image} />
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
