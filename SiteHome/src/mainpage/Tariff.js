import React from 'react';
import styles from './styles.module.css';

const TariffSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.tariffCard}>
        <h2 className={styles.cardTitle}>Tariff "Minute"</h2>
        <ul>
          <li>buy an entrance ticket for 500 rubles and then pay by the minute</li>
          <li>get a 35% discount. To do this, purchase an entrance ticket and pay 60 minutes in advance</li>
        </ul>
      </div>
      <div className={styles.tariffCard}>
        <h2 className={styles.cardTitle}>Tariff "All Inclusive"</h2>
        <ul>
          <li>for a fixed price per person, you get an entrance ticket, unlimited time and food for the rabbits</li>
        </ul>
      </div>
    </section>
  );
};

export default TariffSection;
