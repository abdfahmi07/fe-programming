import { useState } from "react";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import Hero from "../Hero/Hero";
import Movies from "../Movies/Movies";
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
