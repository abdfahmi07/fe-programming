import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero endpoint={ENDPOINTS.NOW_PLAYING} />
      <Movies movies={movies} title="Now Playing Movies" />
    </div>
  );
}

export default NowPlayingMovie;
