import React from 'react';

import { Button } from '../Button/Button';

import Logo from 'src/assets/images/Logo.png';

import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img src={Logo} alt="logo" />
        <div className="header__button-group">
          <Button title="Users" />
          <Button title="Sign up" />
        </div>
      </div>
    </div>
  );
};
