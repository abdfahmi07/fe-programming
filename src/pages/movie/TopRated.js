import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import {
  openMenu,
  openSearch,
  setIsLoading,
} from "../../features/featuresSlice";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";

function TopRatedMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.MOVIE.TOP_RATED);
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  return (
    <div>
      <Hero endpoint={ENDPOINTS.MOVIE.TOP_RATED} type="MOVIE" />
      <Movies title="Top Rated Movies" />
    </div>
  );
}

export default TopRatedMovie;
