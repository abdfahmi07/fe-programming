import { Link } from "react-router-dom";
import StyledMovie from "./index.styled";

function Movie({ movie }) {
  const { id, title, year, release_date, poster, poster_path } = movie;

  return (
    <StyledMovie>
      <img
        className="movie__image"
        src={poster || `https://image.tmdb.org/t/p/w300${poster_path}`}
        alt="movie"
      />
      <Link to={`/movie/${id}`}>
        <h3 className="movie__title">{title}</h3>
      </Link>
      <p className="movie__date">{year || release_date.substr(0, 4)}</p>
    </StyledMovie>
  );
}

export default Movie;
