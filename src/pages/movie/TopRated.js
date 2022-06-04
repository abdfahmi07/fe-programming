import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";

function TopRatedMovie() {
  const endpoint = "movie/top_rated";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&region=ID`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero endpoint={endpoint} />
      <Movies movies={movies} title="Top Rated Movies" />
    </div>
  );
}

export default TopRatedMovie;
