import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numOfPeople, setNumOfPeople] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const existingReservations = await axios.get(`http://localhost:8000/bookings?date=${date}&time=${time}`);
      if (existingReservations.data.length > 0) {
        setMessage("This time is already booked.");
        return;
      }

      const response = await axios.post('http://localhost:8000/bookings', {
        name,
        date,
        time,
        numOfPeople,
        contact
      });

      if (response.status === 201) {
        setMessage("Reservation successful!");
      } else {
        setMessage("Failed to make a reservation. Status: " + response.status);
      }
    } catch (error) {
      console.error("Error details:", error);
      setMessage("Failed to make a reservation. Please try again.");
      if (error.response) {
        setMessage(`Server responded with status ${error.response.status}: ${error.response.data}`);
      }
    }
};

  return (
    <div className={styles.page}>
        <h1 className={styles.title}>Reservation</h1>
            <form className={styles.reservationForm} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Date (dd/mm/yy)"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Num of people"
                value={numOfPeople}
                onChange={(e) => setNumOfPeople(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Phone number/email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
            />
            <button type="submit">Book</button>
            {message && <p className="message">{message}</p>}
            </form>
    </div>
  );
};

export default ReservationForm;
