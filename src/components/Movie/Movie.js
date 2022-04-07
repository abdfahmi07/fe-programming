import styles from "./Movie.module.css";

function Movie(props) {
  // Desctructing props
  const { title, year, type, poster } = props.movie;

  // Formatting text for capitalize first letter
  function capitalizeFirstLetter(letter) {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  }

  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src={poster} alt="movie" />
      <h3 className={styles.movie__title}>{title}</h3>
      <p className={styles.movie__type}>{capitalizeFirstLetter(type)}</p>
      <p className={styles.movie__date}>{year}</p>
    </div>
  );
}

export default Movie;
