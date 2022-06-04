import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";

function PopularMovie() {
  const endpoint = "movie/popular";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&region=ID`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero endpoint={endpoint} />
      <Movies movies={movies} title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
