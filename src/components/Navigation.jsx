import React, { useState } from 'react';
import '../styles/Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
      <h1>SafeNature: Змінимо майбутнє</h1>
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
      </div>
      <ul>
        <li><NavLink to="/home" activeClassName="active">Основна</NavLink></li>
        <li><NavLink to="/calculator" activeClassName="active">Калькулятор Викидів</NavLink></li>
        <li><NavLink to="/climate" activeClassName="active">Клімат</NavLink></li>
        <li><NavLink to="/challenges" activeClassName="active">Завдання</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
