import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import {
  openMenu,
  openSearch,
  setIsDropdownFilmOpen,
  setIsDropdownTvOpen,
  setIsLoading,
} from "../../features/featuresSlice";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";
import Movies from "../../components/Movies";
import Cast from "../../components/Cast";

function DetailMovies() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownFilmOpen(false));
    dispatch(setIsDropdownTvOpen(false));
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.MOVIE.RECOMMENDATION(id));
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  return (
    <>
      <DetailMovie type="MOVIE" />
      <Cast title="Movie" />
      <Movies title="Recommendation Movies" />
    </>
  );
}

export default DetailMovies;
