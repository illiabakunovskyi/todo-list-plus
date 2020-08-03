import React from 'react';
import './styles.css';

const TextButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
};

export default TextButton;
