import { useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner";
import Movie from "../Movie";
import StyledMovies from "./index.styled";

function Movies({ title, searchQuery }) {
  const movies = useSelector((store) => store.moviesReducer.movies);
  const isLoading = useSelector((store) => store.featuresReducer.isLoading);

  return (
    <StyledMovies>
      <section className="movies">
        <h2 className="movies__title">
          {title}
          {searchQuery && ` : ${searchQuery}`}
        </h2>
        <div className="movies__container">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)
          )}
        </div>
      </section>
    </StyledMovies>
  );
}

export default Movies;
