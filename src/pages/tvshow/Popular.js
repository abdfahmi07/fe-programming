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
  setIsDropdownTvOpen,
  setIsLoading,
} from "../../features/featuresSlice";

function PopularTVShow() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownTvOpen(false));
    getPopularTVShow();
  }, []);

  async function getPopularTVShow() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.TV_SHOW.POPULAR);
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  return (
    <div>
      <Hero endpoint={ENDPOINTS.TV_SHOW.POPULAR} type="TV_SHOW" />
      <Movies title="Popular TV Shows" />
    </div>
  );
}

export default PopularTVShow;
