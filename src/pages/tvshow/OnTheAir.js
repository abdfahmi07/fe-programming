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

function OnTheAirTVShow() {
  const currentPage = useSelector(
    (store) => store.featuresReducer.currentPage.tvShows.onAir
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTVShowsCurrentPage({ pageNum: 1, type: "airingToday" }));
    dispatch(setTVShowsCurrentPage({ pageNum: 1, type: "popular" }));
    dispatch(setTVShowsCurrentPage({ pageNum: 1, type: "topRated" }));
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownTvOpen(false));
    getOnTheAirTVShow();
  }, [currentPage]);

  async function getOnTheAirTVShow() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.TV_SHOW.ON_THE_AIR(currentPage));
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  const handlePagination = (number) => {
    if (number !== currentPage) {
      dispatch(setTVShowsCurrentPage({ pageNum: number, type: "onAir" }));
    }
  };
  const handlePrevPage = () => {
    if (currentPage !== 1) {
      dispatch(
        setTVShowsCurrentPage({ pageNum: currentPage - 1, type: "onAir" })
      );
    }
  };

  const handleNextPage = () => {
    if (currentPage !== 5) {
      dispatch(
        setTVShowsCurrentPage({ pageNum: currentPage + 1, type: "onAir" })
      );
    }
  };

  return (
    <div>
      <Hero endpoint={ENDPOINTS.TV_SHOW.ON_THE_AIR()} type="TV_SHOW" />
      <Movies title="On The Air TV Shows" />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePagination={handlePagination}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default OnTheAirTVShow;
