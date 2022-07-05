import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import {
  openMenu,
  openSearch,
  setIsDropdownFilmOpen,
  setIsDropdownTvOpen,
  setIsLoading,
} from "../../features/featuresSlice";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";

function UpcomingMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownFilmOpen(false));
    getUpcomingMovies();
  }, []);

  async function getUpcomingMovies() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.MOVIE.UPCOMING);
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  return (
    <div>
      <Hero endpoint={ENDPOINTS.MOVIE.UPCOMING} type="MOVIE" />
      <Movies title="Upcoming Movies" />
    </div>
  );
}

export default UpcomingMovie;
