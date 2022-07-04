import { Link } from "react-router-dom";
import StyledMovie from "./index.styled";
import imgNotFound from "../../assets/not-found.jpg";
import { isMobileRgx, toMonthName } from "../../helpers";

function Movie({ movie }) {
  const {
    id,
    title,
    name,
    year,
    release_date,
    first_air_date,
    poster,
    poster_path,
    overview,
  } = movie;
  const movieReleaseDate =
    (release_date && release_date.split("-")) ||
    (first_air_date && first_air_date.split("-"));

  return (
    <StyledMovie>
      <Link to={title ? `/movie/${id}` : `/tv/${id}`} className="movie">
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
            <h5 className="movie__title">{title || name}</h5>
            <p className="movie__date">
              {year ||
                (movieReleaseDate &&
                  `${movieReleaseDate[2]} ${toMonthName(
                    movieReleaseDate[1]
                  )}, ${movieReleaseDate[0]}`)}
            </p>
          </div>
          {isMobileRgx && (
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
