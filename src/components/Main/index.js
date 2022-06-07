import { useState } from "react";
import AddMovieForm from "../AddMovieForm";
import Hero from "../Hero";
import Movies from "../Movies";
import data from "../../utils/constant/data";
import ENDPOINTS from "../../utils/constant/endpoints";

function Main() {
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero endpoint={ENDPOINTS.HERO} />
      <Movies movies={movies} setMovies={setMovies} title="Latest Movies" />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );
}

export default Main;
