import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
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
  setTVShowsCurrentPage,
} from "../../features/featuresSlice";
import Pagination from "../../components/Pagination";

function AiringTodayTVShow() {
  const currentPage = useSelector(
    (store) => store.featuresReducer.currentPage.tvShows.airingToday
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTVShowsCurrentPage({ pageNum: 1, type: "onAir" }));
    dispatch(setTVShowsCurrentPage({ pageNum: 1, type: "popular" }));
    dispatch(setTVShowsCurrentPage({ pageNum: 1, type: "topRated" }));
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownTvOpen(false));
    getAiringTodayTVShow();
  }, [currentPage]);

  async function getAiringTodayTVShow() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.TV_SHOW.AIRING_TODAY(currentPage));
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  const handlePagination = (number) => {
    if (number !== currentPage) {
      dispatch(setTVShowsCurrentPage({ pageNum: number, type: "airingToday" }));
    }
  };
  const handlePrevPage = () => {
    if (currentPage !== 1) {
      dispatch(
        setTVShowsCurrentPage({ pageNum: currentPage - 1, type: "airingToday" })
      );
    }
  };

  const handleNextPage = () => {
    if (currentPage !== 5) {
      dispatch(
        setTVShowsCurrentPage({ pageNum: currentPage + 1, type: "airingToday" })
      );
    }
  };

  return (
    <div>
      <Hero endpoint={ENDPOINTS.TV_SHOW.AIRING_TODAY()} type="TV_SHOW" />
      <Movies title="Airing Today TV Shows" />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePagination={handlePagination}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default AiringTodayTVShow;
