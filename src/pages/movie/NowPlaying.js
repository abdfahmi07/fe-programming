import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import { openMenu } from "../../features/featuresSlice";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";

function NowPlayingMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu(false));
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <Hero endpoint={ENDPOINTS.NOW_PLAYING} />
      <Movies title="Now Playing Movies" />
    </div>
  );
}

export default NowPlayingMovie;
