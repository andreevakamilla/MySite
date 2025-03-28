import React from 'react';
import contactInfo from './contactInfo.json';
import styles from './styles.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactSection}>
        <h2>Contact</h2>
        <p>Phone: {contactInfo.contact.phone}</p>
        <p>Email: {contactInfo.contact.email}</p>
        <p>Address: {contactInfo.contact.address}</p>
      </div>
      <div className={styles.connectSection}>
        <h2>Connect</h2>
        <a href={contactInfo.connect.socialNetwork}>Social Network</a>
      </div>
    </div>
  );
};

export default Contact;
