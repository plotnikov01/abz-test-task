import React from 'react'

import './inputRadio.scss';

export const InputRadio = (props) => {
  const {title, name, onChange, onBlur, value} = props;

  return (
    <div className='input-radio-container'>
      <input type="radio" value={value} name={name} onChange={onChange} onBlur={onBlur} />
      <span>{title}</span>
    </div>
  )
}
