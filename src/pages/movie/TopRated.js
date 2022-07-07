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

function TopRatedMovie() {
  const currentPage = useSelector(
    (store) => store.featuresReducer.currentPage.movies.topRated
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "popular" }));
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "upcoming" }));
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "nowPlaying" }));
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownFilmOpen(false));
    getTopRatedMovies();
  }, [currentPage]);

  async function getTopRatedMovies() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.MOVIE.TOP_RATED(currentPage));
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  const handlePagination = (number) => {
    if (number !== currentPage) {
      dispatch(setMoviesCurrentPage({ pageNum: number, type: "topRated" }));
    }
  };
  const handlePrevPage = () => {
    if (currentPage !== 1) {
      dispatch(
        setMoviesCurrentPage({ pageNum: currentPage - 1, type: "topRated" })
      );
    }
  };

  const handleNextPage = () => {
    if (currentPage !== 5) {
      dispatch(
        setMoviesCurrentPage({ pageNum: currentPage + 1, type: "topRated" })
      );
    }
  };

  return (
    <div>
      <Hero endpoint={ENDPOINTS.MOVIE.TOP_RATED()} type="MOVIE" />
      <Movies title="Top Rated Movies" />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePagination={handlePagination}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default TopRatedMovie;
