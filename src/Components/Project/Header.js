import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [burgerClass, setBurgerClass] = useState('');

  const handleBuger = () =>
    burgerClass === '' ? setBurgerClass('open') : setBurgerClass('');

  return (
    <header>
      <div className="menu-btn" onClick={handleBuger}>
        <span className={`menu-btn-burger ${burgerClass}`}></span>
      </div>

      <nav className="nav">
        <ul className="menu-nav">
          <li className="menu-nav-item">
            <Link to="/" className="menu-nav-link">
              Home
            </Link>
          </li>
          <li className="menu-nav-item">
            <Link to="/about" className="menu-nav-link">
              About
            </Link>
          </li>
          <li className="menu-nav-item">
            <Link to="/projects" className="menu-nav-link">
              Projects
            </Link>
          </li>
          <li className="menu-nav-item">
            <Link to="/contact" className="menu-nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
