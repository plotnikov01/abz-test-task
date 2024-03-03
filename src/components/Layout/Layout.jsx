import React from 'react'

import './layout.scss'

export const Layout = (props) => {
  return (
    <div className='layout'>{props.children}</div>
  )
}
