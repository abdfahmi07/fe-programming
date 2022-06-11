import { useSelector } from "react-redux";
import Movie from "../Movie";
import StyledMovies from "./index.styled";

function Movies(props) {
  const { title } = props;

  const movies = useSelector((store) => store.moviesReducer.movies);

  return (
    <StyledMovies>
      <section className="movies">
        <h2 className="movies__title">{title}</h2>
        <div className="movies__container">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </StyledMovies>
  );
}

export default Movies;
