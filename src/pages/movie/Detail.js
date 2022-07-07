import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const { credits } = useSelector((store) => store.moviesReducer.movieDetail);
  const movies = useSelector((store) => store.moviesReducer.movies);
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
      {credits?.cast.length >= 1 && <Cast title="Movie" />}
      {movies.length >= 1 && <Movies title="Recommendation Movies" />}
    </>
  );
}

export default DetailMovies;
