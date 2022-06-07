import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";

function TopRatedMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOP_RATED);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero endpoint={ENDPOINTS.TOP_RATED} />
      <Movies movies={movies} title="Top Rated Movies" />
    </div>
  );
}

export default TopRatedMovie;
