import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Header from './mainpage/Header';
import HeroSection from './mainpage/HeroSection';
import About from './mainpage/About';
import Tariff from './mainpage/Tariff'; 
import Menu from './mainpage/Menu';
import ReservationForm from './mainpage/Reservation';
import BunnyForm from './mainpage/BunnyForm';  
import BunnyGallery from './mainpage/BunnyGallery'; 
import Contact from './mainpage/Contact';
import Modal from './mainpage/Modal';

function App() {
  const [refreshGallery, setRefreshGallery] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBunnyAdded = () => {
    setRefreshGallery(!refreshGallery); 
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Header />
      <Element name="hero">
        <HeroSection onBuyCertificateClick={openModal} />
      </Element>
      <Element name="about"><About /></Element>
      <Element name="tariff"><Tariff /></Element>
      <Element name="menu"><Menu /></Element>
      <Element name="reservation"><ReservationForm /></Element>
      <Element name="bunnyForm"><BunnyForm onBunnyAdded={handleBunnyAdded} /></Element>
      <Element name="bunnyGallery"><BunnyGallery key={refreshGallery} /></Element>
      <Element name="contact"><Contact /></Element>
      
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default App;
