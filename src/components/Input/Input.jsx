import React from 'react'

import './input.scss';

export const Input = (props) => {
  const { label, placeholder, name, type, value, onChange, onBlur, errorMessage } = props;

  const blurredStyle = errorMessage ? 'error' : '';

  return (
    <div className='input-container' key={name}>
      <label>{label}</label>
      <input className={blurredStyle} onBlur={onBlur} onChange={onChange} type={type} value={value} name={name} placeholder={placeholder}  />
      {errorMessage && <span className='error-message'>{errorMessage}</span>}
    </div>
  )
}
