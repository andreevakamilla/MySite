import React from "react";
import MenuItem from "./MenuItem";
import styles from './styles.module.css';
import carrotCake from '../images/carrot_cake.png';
import tea from '../images/tea.png';
import salad from '../images/salad.png';
import bruschetta from '../images/bruscheta.jpeg';
import yogurt from '../images/yogurt.png';



const menuItems = [
  {
    name: "Carrot Cake",
    price: "$5.00",
    image: carrotCake
  },
  {
    name: "Herbal Tea",
    price: "$3.50",
    image: tea
  },
  {
    name: "Vegan Salad",
    price: "$7.00",
    image: salad
  },
  {
    name: "bruschetta",
    price: "$6.00",
    image: bruschetta
  },
  {
    name: "Fruit Yogurt",
    price: "$5.00",
    image: yogurt
  }
];

const Menu = () => {
    return (
      <div className={styles.menuContainer}>
        <h1 className={styles.menuTitle}>Menu</h1>
        <p>
          Please ask about modifying items for dietary restrictions and allergies.
          Many items can be made gluten or dairy free, vegan or vegetarian upon
          request.
        </p>
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    );
  };

export default Menu;
