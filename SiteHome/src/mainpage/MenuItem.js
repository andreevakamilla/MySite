import React from "react";
import styles from './styles.module.css';


const MenuItem = ({ name, price, image }) => {
  return (
    <div className={styles.MenuItem}>
      <img
        src={image}
        alt={name}
        style={styles.MenuImage}
      />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;
