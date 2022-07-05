import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import {
  openMenu,
  openSearch,
  setIsDropdownTvOpen,
  setIsLoading,
} from "../../features/featuresSlice";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";
import Movies from "../../components/Movies";
import Cast from "../../components/Cast";

function DetailTVShows() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownTvOpen(false));
    getRecommendationTvShows();
  }, [id]);

  async function getRecommendationTvShows() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.TV_SHOW.RECOMMENDATION(id));
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  return (
    <>
      <DetailMovie type="TV_SHOW" />
      <Cast title="Series" />
      <Movies title="Recommendation TV Shows" />
    </>
  );
}

export default DetailTVShows;
