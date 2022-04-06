import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { nanoid } from "nanoid";

function Movies(props) {
  const { movies, setMovies } = props;

  function tambahFilm() {
    const movie = {
      id: nanoid(10),
      title: "Spiral Jigsaw",
      year: "2021",
      type: "movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movies__container}>
          {/**
           * Looping semua movies
           * Render as a list
           * Send some props
           */}
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        {/* Menambahkan event onClick */}
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
