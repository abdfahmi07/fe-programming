import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  openMenu,
  openSearch,
  setIsDropdownFilmOpen,
  setIsDropdownTvOpen,
} from "../../features/featuresSlice";
import StyledNavbar from "./index.styled";

function Navbar() {
  const dropdownFilm = useRef(null);
  const dropdownTV = useRef(null);

  const isMenuOpen = useSelector((store) => store.featuresReducer.isMenuOpen);
  const isSearchOpen = useSelector(
    (store) => store.featuresReducer.isShowSearch
  );
  const isDropdownFilmOpen = useSelector(
    (store) => store.featuresReducer.isDropdownFilmOpen
  );
  const isDropdownTVOpen = useSelector(
    (store) => store.featuresReducer.isDropdownTVOpen
  );

  const dispatch = useDispatch();
  const navigation = useNavigate();

  function useOutsideClickEvent(ref) {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          if (ref.current.id === "dropdownFilm") {
            dispatch(setIsDropdownFilmOpen(false));
          } else {
            dispatch(setIsDropdownTvOpen(false));
          }
        }
      }

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    });
  }

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

  function openFilmMenu() {
    dispatch(setIsDropdownFilmOpen(!isDropdownFilmOpen));
    dispatch(setIsDropdownTvOpen(false));
  }

  function openTVShowMenu() {
    dispatch(setIsDropdownTvOpen(!isDropdownTVOpen));
    dispatch(setIsDropdownFilmOpen(false));
  }

  useOutsideClickEvent(dropdownFilm);
  useOutsideClickEvent(dropdownTV);

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
              <div
                id="dropdownFilm"
                ref={dropdownFilm}
                onClick={openFilmMenu}
                className="item__title"
              >
                <h3 className="title">Film</h3>
                <FontAwesomeIcon
                  className="icon"
                  style={isDropdownFilmOpen && { transform: "rotate(180deg)" }}
                  icon="fa-solid fa-caret-down"
                />
              </div>
              <ul
                className={`navbar__sublist ${!isDropdownFilmOpen && "hide"}`}
              >
                <li className="navbar__subitem">
                  <Link to="/movie/popular">Popular</Link>
                </li>
                <li className="navbar__subitem">
                  <Link to="/movie/top-rated">Top Rated</Link>
                </li>
                <li className="navbar__subitem">
                  <Link to="/movie/upcoming">Upcoming</Link>
                </li>
                <li className="navbar__subitem">
                  <Link to="/movie/now-playing">Now Playing</Link>
                </li>
              </ul>
            </li>
            <li className="navbar__item">
              <div
                id="dropdownTV"
                ref={dropdownTV}
                onClick={openTVShowMenu}
                className="item__title"
              >
                <h3 className="title">TV Shows</h3>
                <FontAwesomeIcon
                  className="icon"
                  style={isDropdownTVOpen && { transform: "rotate(180deg)" }}
                  icon="fa-solid fa-caret-down"
                />
              </div>
              <ul className={`navbar__sublist ${!isDropdownTVOpen && "hide"}`}>
                <li className="navbar__subitem">
                  <Link to="/tv/popular">Popular</Link>
                </li>
                <li className="navbar__subitem">
                  <Link to="/tv/top-rated">Top Rated</Link>
                </li>
                <li className="navbar__subitem">
                  <Link to="/tv/on-the-air">On The Air</Link>
                </li>
                <li className="navbar__subitem">
                  <Link to="/tv/airing-today">Airing Today</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar__toggle" onClick={showMenu}>
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
              autoFocus
            />
          </div>
        )}
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
