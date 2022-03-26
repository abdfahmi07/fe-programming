import styles from "./Movie.module.css";

function Movie(props) {
  // Desctructing props movie
  const { title, year, poster } = props.movie;

  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src={poster} alt="movie" />
      <h3 className={styles.movie__title}>{title}</h3>
      <p className={styles.movie__date}>{year}</p>
    </div>
  );
}

export default Movie;
