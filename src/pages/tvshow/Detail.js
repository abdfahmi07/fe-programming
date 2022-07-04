import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import {
  openMenu,
  openSearch,
  setIsLoading,
} from "../../features/featuresSlice";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";
import Movies from "../../components/Movies";

function DetailTVShows() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(openSearch(false));
    dispatch(openMenu(false));
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
      <Movies title="Recommendation TV Shows" />
    </>
  );
}

export default DetailTVShows;
