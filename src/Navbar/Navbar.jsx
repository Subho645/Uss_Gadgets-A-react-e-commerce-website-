import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Components/Assets/logo.png';
import cart_icon from '../Components/Assets/cart_icon.png';

export const Navbar = ({ cart }) => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>USS GADGETS</p>
      </div>
      <ul className="nav-menu">
        {['Mobile', 'Laptop Tabs', 'Smart Watch', 'Camera'].map(item => (
          <li key={item} onClick={() => handleItemClick(item)} className={activeItem === item ? 'active' : ''}>
            <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
            {activeItem === item && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <Link to="/cart">
          <img src={cart_icon} alt=""/>
          <div className="nav-cart-count">{cart.length}</div>
        </Link>
      </div>
    </div>
  );
};
