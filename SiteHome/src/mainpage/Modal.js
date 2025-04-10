import React from 'react';
import styles from './styles.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {children} {}
      </div>
    </div>
  );
};

export default Modal;
