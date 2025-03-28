import React, { useState } from 'react';
import styles from './styles.module.css';

const BunnyForm = ({ onBunnyAdded }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBunny = { name, age, description, photo };

    const response = await fetch('http://localhost:8000/bunnies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBunny),
    });

    if (response.ok) {
      const addedBunny = await response.json();
      onBunnyAdded(addedBunny);
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Propose Your Bunny</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
        <input 
          type="number" 
          placeholder="Age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          required
        />
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required
        />
        <input 
          type="text" 
          placeholder="Photo URL" 
          value={photo} 
          onChange={(e) => setPhoto(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BunnyForm;
