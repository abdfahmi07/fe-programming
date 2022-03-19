import styles from "./Movie.module.css";

function Movie() {
  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src="https://picsum.photos/300/400"
        alt="movie"
      />
      <h3 className={styles.movie__title}>Movie Title</h3>
      <p className={styles.movie__date}>Date Title</p>
    </div>
  );
}

export default Movie;
