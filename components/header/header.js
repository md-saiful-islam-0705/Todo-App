import React from 'react';

import './header.css';

export const Header = props => {
  const { complete, active } = props;
  return (
    <header className="header">
      <h1 className="header__title">To Do App!</h1>
      <p className="header__info">
        <span>Complete: {complete}</span> <span>Active: {active}</span>
      </p>
    </header>
  );
};
