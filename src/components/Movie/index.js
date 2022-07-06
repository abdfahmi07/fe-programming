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
    profile_path,
    media_type,
    overview,
  } = movie;
  const movieReleaseDate =
    (release_date && release_date.split("-")) ||
    (first_air_date && first_air_date.split("-"));

  return (
    <StyledMovie>
      <div className="movie">
        <Link
          to={title ? `/movie/${id}` : `/tv/${id}`}
          className="movie__thumbnail"
        >
          <img
            className="movie__image"
            src={
              poster
                ? poster
                : poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : imgNotFound
            }
            alt="movie"
          />
        </Link>
        <div className="movie__info">
          <div>
            <h5 className="movie__title">{title || name}</h5>
            <p className="movie__date">
              {year ||
                (movieReleaseDate &&
                  `${movieReleaseDate[2]} ${toMonthName(
                    movieReleaseDate[1]
                  )}, ${movieReleaseDate[0]}`) ||
                `${media_type[0].toUpperCase()}${media_type.substr(1)}`}
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
      </div>
    </StyledMovie>
  );
}

export default Movie;
