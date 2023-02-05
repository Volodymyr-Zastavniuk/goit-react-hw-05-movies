import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__list-item">
          <NavLink to="" className="Nav__list-link">
            Home
          </NavLink>
        </li>
        <li className="Nav__list-item">
          <NavLink to="movies" className="Nav__list-link">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
