import React from 'react';
import './styles.css';

const Input = ({ type, placeholder, value, onChange, style }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
    />
  );
};

export default Input;
