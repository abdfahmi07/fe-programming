import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import Pagination from "../../components/Pagination";
import {
  openMenu,
  openSearch,
  setIsDropdownFilmOpen,
  setIsLoading,
  setMoviesCurrentPage,
} from "../../features/featuresSlice";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";

function UpcomingMovie() {
  const currentPage = useSelector(
    (store) => store.featuresReducer.currentPage.movies.upcoming
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "popular" }));
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "nowPlaying" }));
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "topRated" }));
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownFilmOpen(false));
    getUpcomingMovies();
  }, [currentPage]);

  async function getUpcomingMovies() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.MOVIE.UPCOMING(currentPage));
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  const handlePagination = (number) => {
    if (number !== currentPage) {
      dispatch(setMoviesCurrentPage({ pageNum: number, type: "upcoming" }));
    }
  };
  const handlePrevPage = () => {
    if (currentPage !== 1) {
      dispatch(
        setMoviesCurrentPage({ pageNum: currentPage - 1, type: "upcoming" })
      );
    }
  };

  const handleNextPage = () => {
    if (currentPage !== 5) {
      dispatch(
        setMoviesCurrentPage({ pageNum: currentPage + 1, type: "upcoming" })
      );
    }
  };

  return (
    <div>
      <Hero endpoint={ENDPOINTS.MOVIE.UPCOMING()} type="MOVIE" />
      <Movies title="Upcoming Movies" />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePagination={handlePagination}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default UpcomingMovie;
