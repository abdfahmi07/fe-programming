import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchSection from "../../components/SearchSection";
import ENDPOINTS from "../../utils/constant/endpoints";
import { updateMovies } from "../../features/moviesSlice";
import {
  openMenu,
  openSearch,
  setIsLoading,
} from "../../features/featuresSlice";

const SearchMovie = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    getMovieSearch();
  }, [query]);

  async function getMovieSearch() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.SEARCH_MOVIE(query));
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  return <SearchSection searchQuery={query} />;
};

export default SearchMovie;
