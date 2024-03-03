import React from 'react'

import './card.scss'

export const Card = (props) => {
  const { photo, name, position, phone, email } = props;

  return (
    <div className='card'>
      <img src={photo} alt='' />
      <p className='card__title'>{name}</p>
      <div className='card__info'>
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  )
}
