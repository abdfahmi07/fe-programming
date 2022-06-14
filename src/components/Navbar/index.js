import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openMenu } from "../../features/featuresSlice";
import StyledNavbar from "./index.styled";

function Navbar() {
  const isMenuOpen = useSelector((store) => store.featuresReducer.isMenuOpen);
  const dispatch = useDispatch();

  function showMenu() {
    dispatch(openMenu(!isMenuOpen));
  }

  return (
    <StyledNavbar bgColor="primary">
      <nav className="navbar">
        <div className="navbar__left">
          <div className="navbar__header">
            <Link to="/">
              <h1 className="navbar__brand">Movie App</h1>
            </Link>
          </div>
          <div
            className={`navbar__toggle ${isMenuOpen && "open"}`}
            onClick={showMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar__right ${!isMenuOpen && "hide"}`}>
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
