import styles from "./style.module.css";
import Movie from "../Movie";
import { nanoid } from "nanoid";
import Button from "../ui/Button";

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
        <Button onClick={tambahFilm}>Add Movie</Button>
        {/* <button onClick={tambahFilm}>Add Movie</button> */}
      </section>
    </div>
  );
}

export default Movies;