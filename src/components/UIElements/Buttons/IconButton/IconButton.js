import React from 'react';
import './styles.css';

const IconButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="icon_button">
      {children}
    </button>
  );
};

export default IconButton;
