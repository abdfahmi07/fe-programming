import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const { credits } = useSelector((store) => store.moviesReducer.movieDetail);
  const movies = useSelector((store) => store.moviesReducer.movies);
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
      {credits?.cast.length >= 1 && <Cast title="Series" />}
      {movies.length >= 1 && <Movies title="Recommendation TV Shows" />}
    </>
  );
}

export default DetailTVShows;
