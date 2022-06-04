import styles from "./style.module.css";

function Movie(props) {
  // Desctructing props
  const { title, type, year, release_date, poster, poster_path } = props.movie;

  // Formatting text for capitalize first letter
  // function capitalizeFirstLetter(letter) {
  //   return letter.charAt(0).toUpperCase() + letter.slice(1);
  // }

  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src={poster || `https://image.tmdb.org/t/p/w300${poster_path}`}
        alt="movie"
      />
      <h3 className={styles.movie__title}>{title}</h3>
      {/* <p className={styles.movie__type}>{type || }</p> */}
      <p className={styles.movie__date}>{year || release_date.substr(0, 4)}</p>
    </div>
  );
}

export default Movie;
