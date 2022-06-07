import { Link } from "react-router-dom";
import styles from "./style.module.css";

function Movie(props) {
  const { id, title, year, release_date, poster, poster_path } = props.movie;

  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src={poster || `https://image.tmdb.org/t/p/w300${poster_path}`}
        alt="movie"
      />
      <Link to={`/movie/${id}`}>
        <h3 className={styles.movie__title}>{title}</h3>
      </Link>
      <p className={styles.movie__date}>{year || release_date.substr(0, 4)}</p>
    </div>
  );
}

export default Movie;
