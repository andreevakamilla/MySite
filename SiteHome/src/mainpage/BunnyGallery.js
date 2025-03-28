import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const BunnyGallery = ({ onBunnyUpdated }) => {
  const [bunnies, setBunnies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchBunnies();
  }, []);

  const fetchBunnies = async () => {
    try {
      const response = await fetch('http://localhost:8000/bunnies/');
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        console.log("Data is not an array. Converting to array.");
        data = [data]; 
      }
  
      setBunnies(data);
    } catch (error) {
      console.error("Error fetching bunnies:", error);
    }
  };
  

  const deleteBunny = async (id) => {
    try {
      await fetch(`http://localhost:8000/bunnies/${id}`, {
        method: 'DELETE',
      });
      fetchBunnies(); 
    } catch (error) {
      console.error("Error deleting bunny:", error);
    }
  };

  const editBunny = async (id, updatedBunny) => {
    try {
      await fetch(`http://localhost:8000/bunnies/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBunny),
      });
      fetchBunnies(); 
    } catch (error) {
      console.error("Error editing bunny:", error);
    }
  };

  const displayedBunnies = bunnies.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < bunnies.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className={styles.galleryWrapper}>
      <button onClick={handlePrev} disabled={currentIndex === 0} className={styles.arrowButton}>
        &larr;
      </button>

      <div className={styles.galleryContainer}>
        {displayedBunnies.map((bunny) => (
          <div key={bunny.id} className={styles.bunnyCard}>
            <img src={bunny.photo} alt={bunny.name} className={styles.bunnyImage} />
            <h3>{bunny.name}</h3>
            <p>Age: {bunny.age}</p>
            <p>{bunny.description}</p>
            <button
              className={styles.actionButton}
              onClick={() => deleteBunny(bunny.id)}
            >
              Delete
            </button>
            <button
              className={styles.actionButton}
              onClick={() => {
                const newName = prompt('Enter new name:', bunny.name);
                const newAge = prompt('Enter new age:', bunny.age);
                const newDescription = prompt(
                  'Enter new description:',
                  bunny.description
                );

                if (newName && newAge && newDescription) {
                  editBunny(bunny.id, {
                    name: newName,
                    age: newAge,
                    description: newDescription,
                    photo: bunny.photo,
                  });
                }
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentIndex + 3 >= bunnies.length}
        className={styles.arrowButton}
      >
        &rarr;
      </button>
    </div>
  );
};

export default BunnyGallery;
