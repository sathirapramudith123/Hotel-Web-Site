import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ isMenuOpen }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
      <ul className="nav-list">
        {navItems.map(item => (
          <li key={item.path} className="nav-item">
            <Link 
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;