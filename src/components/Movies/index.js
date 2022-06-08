import { nanoid } from "nanoid";
import Button from "../ui/Button";
import Movie from "../Movie";
import StyledMovies from "./index.styled";

function Movies(props) {
  const { title, movies, setMovies } = props;

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
    <StyledMovies>
      <section className="movies">
        <h2 className="movies__title">{title}</h2>
        <div className="movies__container">
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
      </section>
    </StyledMovies>
  );
}

export default Movies;
