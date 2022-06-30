import { Link } from "react-router-dom";
import StyledMovie from "./index.styled";
import imgNotFound from "../../assets/not-found.jpg";

function Movie({ movie }) {
  const { id, title, year, release_date, poster, poster_path, overview } =
    movie;

  return (
    <StyledMovie>
      <Link to={`/movie/${id}`} className="movie">
        <div className="movie__thumbnail">
          <img
            className="movie__image"
            src={
              poster
                ? poster
                : poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : imgNotFound
            }
            alt="movie"
          />
        </div>
        <div className="movie__info">
          <div>
            <h5 className="movie__title">{title}</h5>
            <p className="movie__date">{year || release_date?.substr(0, 4)}</p>
          </div>
          {window.innerWidth <= 425 && (
            <p className="movie__overview">
              {overview &&
                overview.length >= 100 &&
                `${overview.substr(0, 90)}...`}
            </p>
          )}
        </div>
      </Link>
    </StyledMovie>
  );
}

export default Movie;
