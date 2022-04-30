import { useState } from "react";
import AddMovieForm from "../AddMovieForm";
import Hero from "../Hero";
import Movies from "../Movies";
import data from "../../utils/constant/data";

function Main() {
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );
}

export default Main;
