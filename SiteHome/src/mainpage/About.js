import React from 'react';
import styles from './styles.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>About Us</h2>
      
      <p className={styles.aboutText}>
        Bunny Haven is a unique anti-café where guests can unwind in a cozy, home-like environment while spending time with adorable bunnies.
        At Bunny Haven, you don’t just enjoy a warm cup of coffee or a delicious snack—you get the chance to interact with our friendly bunnies,
        play with them, and learn about their individual personalities.
      </p>
      <p className={styles.aboutText}>
        We welcome guests every day from 10:00 to 22:00.
      </p>
      <button className={styles.aboutButton}>Pricing</button>
    </section>
  );
};

export default About;
