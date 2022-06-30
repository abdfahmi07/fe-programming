import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { openMenu, openSearch } from "../../features/featuresSlice";
import StyledNavbar from "./index.styled";

function Navbar() {
  const isMenuOpen = useSelector((store) => store.featuresReducer.isMenuOpen);
  const isSearchOpen = useSelector(
    (store) => store.featuresReducer.isShowSearch
  );
  const dispatch = useDispatch();

  const navigation = useNavigate();

  function showMenu() {
    dispatch(openMenu(!isMenuOpen));
  }

  function showSearch() {
    dispatch(openSearch(!isSearchOpen));
  }

  function searchMovie(e) {
    if (e.keyCode === 13) {
      navigation(`/movie/search/${e.target.value}`);
    }
  }

  return (
    <StyledNavbar bgColor="primary">
      <nav className="navbar">
        <div className="navbar__header">
          <Link to="/">
            <h1 className="navbar__brand">Movie App</h1>
          </Link>
        </div>
        <div className={`navbar__menu ${isMenuOpen && "active"}`}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/top">Top Rated</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/create">Add Movie</Link>
            </li>
          </ul>
        </div>
        <div
          className={`navbar__toggle ${isMenuOpen && "open"}`}
          onClick={showMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar__search">
          {!isSearchOpen ? (
            <FontAwesomeIcon
              className="navbar__search__icon"
              icon="fa-solid fa-magnifying-glass"
              size="xl"
              onClick={showSearch}
            />
          ) : (
            <FontAwesomeIcon
              className="navbar__search__icon"
              icon="fa-solid fa-xmark"
              size="2x"
              onClick={showSearch}
            />
          )}
        </div>
        {isSearchOpen && (
          <div className="navbar__search__wrapper">
            <FontAwesomeIcon
              size="sm"
              className="search__icon"
              icon="fa-solid fa-magnifying-glass"
            />
            <input
              type="text"
              className="search__input"
              placeholder="Search movie"
              onKeyUp={searchMovie}
            />
          </div>
        )}
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
