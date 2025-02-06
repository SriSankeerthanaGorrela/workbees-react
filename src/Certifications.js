import React from 'react';
import './Certifications.css'; 

import Certificate1 from './Assets/Certificate1.svg';
import Certificate2 from './Assets/Certificate2.svg';
import Certificate3 from './Assets/Certificate3.svg';
import Certificate4 from './Assets/Certificate4.svg';
import Certificate5 from './Assets/Certificate5.svg';
import Certificate6 from './Assets/Certificate6.svg';

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h1 className="certifications-header">Certifications</h1>
      <p className="certifications-description">
        We keep deepening our expertise to meet your highest expectations and build business innovative products.
      </p>
      <div className="certificates">
          <img src={Certificate1} alt="Certificate 1"/>
          <img src={Certificate2} alt="Certificate 2"/>
          <img src={Certificate3} alt="Certificate 3"/>
          <img src={Certificate4} alt="Certificate 4"/>
          <img src={Certificate5} alt="Certificate 5"/>
          <img src={Certificate6} alt="Certificate 6"/>
      </div>
    </div>
  );
};

export default Certifications;
