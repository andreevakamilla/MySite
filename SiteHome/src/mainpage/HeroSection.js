import React from 'react';
import styles from './styles.module.css';
import bunniesImage from '../images/about.jpg';

const HeroSection = ({ onBuyCertificateClick }) => {
  return (
    <section 
      className={styles.heroSection} 
      style={{ backgroundImage: `url(${bunniesImage})` }}
    >
      <button className={styles.heroButton} onClick={onBuyCertificateClick}>
        Buy gift certificate
      </button>
    </section>
  );
};

export default HeroSection;
