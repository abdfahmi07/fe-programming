import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";
import {
  openMenu,
  openSearch,
  setIsDropdownFilmOpen,
  setIsDropdownTvOpen,
  setIsLoading,
} from "../../features/featuresSlice";

function PopularMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownFilmOpen(false));
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.MOVIE.POPULAR);
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  return (
    <div>
      <Hero endpoint={ENDPOINTS.MOVIE.POPULAR} type="MOVIE" />
      <Movies title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
