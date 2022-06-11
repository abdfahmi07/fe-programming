import { Link } from "react-router-dom";
import StyledNavbar from "./index.styled";

function Navbar() {
  return (
    <StyledNavbar bgColor="primary">
      <nav className="navbar">
        <div className="navbar__left">
          <Link to="/">
            <h1 className="navbar__brand">Movie App</h1>
          </Link>
        </div>
        <div className="navbar__right">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
