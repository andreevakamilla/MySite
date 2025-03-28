import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './styles.module.css';
import logo from '../images/icon.png';
import axios from 'axios';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setMessage(''); 
  };

  const switchMode = () => {
    setIsRegistering(!isRegistering);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegistering
      ? 'http://localhost:8000/auth/register/'
      : 'http://localhost:8000/auth/token/';
    
    try {
      const response = await axios.post(url, {
        username: name,
        email,
        password,
      });

      if (isRegistering) {
        setMessage('Registration successful. You can now log in.');
      } else {
        const { access, refresh } = response.data;
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);
        setMessage('Login successful!');
      }
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.data) {
        console.log(error.response);
        setMessage(error.response.data.detail || 'Failed to authenticate. Please try again.');
      } else {
        setMessage('Failed to authenticate. Please try again.');
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Bunny Haven Logo" className={styles.logo} />
        <h1 className={styles.brandName}>Bunny Haven</h1>
      </div>
      <nav className={styles.nav}>
        <Link to="hero" smooth={true} duration={500} className={styles.navLink}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className={styles.navLink}>
          About
        </Link>
        <Link to="tariff" smooth={true} duration={500} className={styles.navLink}>
          Tariff
        </Link>
        <Link to="menu" smooth={true} duration={500} className={styles.navLink}>
          Menu
        </Link>
        <Link to="reservation" smooth={true} duration={500} className={styles.navLink}>
          Reservations
        </Link>
        <button className={styles.authButton} onClick={toggleModal}>
          Login / Register
        </button>
      </nav>

      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={toggleModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <form className={styles.authForm} onSubmit={handleSubmit}>
              {isRegistering && (
                <div>
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>
                </div>
              )}
              <div>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
              </div>
              <button type="submit" className={styles.submitButton}>
                {isRegistering ? 'Register' : 'Login'}
              </button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
            <button className={styles.switchButton} onClick={switchMode}>
              {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
            </button>
            <button className={styles.closeButton} onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
