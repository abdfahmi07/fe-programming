import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import Pagination from "../../components/Pagination";
import {
  openMenu,
  openSearch,
  setCurrentPage,
  setIsDropdownFilmOpen,
  setIsLoading,
  setMoviesCurrentPage,
} from "../../features/featuresSlice";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";

function NowPlayingMovie() {
  const currentPage = useSelector(
    (store) => store.featuresReducer.currentPage.movies.nowPlaying
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "popular" }));
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "upcoming" }));
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "topRated" }));
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownFilmOpen(false));
    getNowPlayingMovies();
  }, [currentPage]);

  async function getNowPlayingMovies() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.MOVIE.NOW_PLAYING(currentPage));
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  const handlePagination = (number) => {
    if (number !== currentPage) {
      dispatch(setMoviesCurrentPage({ pageNum: number, type: "nowPlaying" }));
    }
  };
  const handlePrevPage = () => {
    if (currentPage !== 1) {
      dispatch(
        setMoviesCurrentPage({ pageNum: currentPage - 1, type: "nowPlaying" })
      );
    }
  };

  const handleNextPage = () => {
    if (currentPage !== 5) {
      dispatch(
        setMoviesCurrentPage({ pageNum: currentPage + 1, type: "nowPlaying" })
      );
    }
  };

  return (
    <div>
      <Hero endpoint={ENDPOINTS.MOVIE.NOW_PLAYING()} type="MOVIE" />
      <Movies title="Now Playing Movies" />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePagination={handlePagination}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default NowPlayingMovie;
