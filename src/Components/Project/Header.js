import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Header = () => {
  const [burgerClass, setBurgerClass] = useState(null);
  const location = useLocation();

  const handleBuger = () =>
    burgerClass === '' ? setBurgerClass('open') : setBurgerClass('');

  useEffect(() => {
    handleBuger();
  }, [location]);

  return (
    <header>
      <div className="menu-btn" onClick={handleBuger}>
        <span className={`menu-btn-burger ${burgerClass}`}></span>
      </div>

      <nav className={`nav ${burgerClass}`}>
        <ul className={`menu-nav ${burgerClass}`}>
          <li className={`menu-nav-item ${burgerClass}`}>
            <Link
              to="/SASS-website/"
              className={
                location.pathname === '/'
                  ? `menu-nav-link active ${burgerClass}`
                  : `menu-nav-link ${burgerClass}`
              }
            >
              Home
            </Link>
          </li>
          <li className={`menu-nav-item ${burgerClass}`}>
            <Link
              to="/SASS-website/about"
              className={
                location.pathname === '/about'
                  ? `menu-nav-link active ${burgerClass}`
                  : `menu-nav-link ${burgerClass}`
              }
            >
              About
            </Link>
          </li>
          <li className={`menu-nav-item ${burgerClass}`}>
            <Link
              to="/SASS-website/projects"
              className={
                location.pathname === '/projects'
                  ? `menu-nav-link active ${burgerClass}`
                  : `menu-nav-link  ${burgerClass}`
              }
            >
              Projects
            </Link>
          </li>
          <li className={`menu-nav-item ${burgerClass}`}>
            <Link
              to="/SASS-website/contact"
              className={
                location.pathname === '/contact'
                  ? `menu-nav-link active ${burgerClass}`
                  : `menu-nav-link ${burgerClass}`
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
