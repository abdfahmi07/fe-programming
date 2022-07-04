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
  setIsLoading,
} from "../../features/featuresSlice";

function TopRatedTVShow() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    getTopRatedTVShow();
  }, []);

  async function getTopRatedTVShow() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.TV_SHOW.TOP_RATED);
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  return (
    <div>
      <Hero endpoint={ENDPOINTS.TV_SHOW.POPULAR} type="TV_SHOW" />
      <Movies title="Top Rated TV Shows" />
    </div>
  );
}

export default TopRatedTVShow;
