import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";
import {
  openMenu,
  openSearch,
  setCurrentPage,
  setIsDropdownFilmOpen,
  setIsLoading,
} from "../../features/featuresSlice";
import Pagination from "../../components/Pagination";

function PopularMovie() {
  const currentPage = useSelector((store) => store.featuresReducer.currentPage);
  // const [query, setQuery] = useState("");
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // const params = new URLSearchParams();
    // if (query) {
    //   params.append("page", query);
    // } else {
    //   params.delete("page");
    // }
    // navigate({ search: params.toString() });
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownFilmOpen(false));
    getPopularMovies();
  }, [currentPage]);

  async function getPopularMovies() {
    dispatch(setIsLoading(true));
    const response = await axios(ENDPOINTS.MOVIE.POPULAR(currentPage));
    dispatch(updateMovies(response.data.results));
    dispatch(setIsLoading(false));
  }

  const handlePagination = (number) => {
    if (number !== currentPage) {
      dispatch(setCurrentPage(number));
    }
  };
  const handlePrevPage = () => {
    if (currentPage !== 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage !== 5) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div>
      <Hero endpoint={ENDPOINTS.MOVIE.POPULAR()} type="MOVIE" />
      <Movies title="Popular Movies" />
      <Pagination
        handleNextPage={handleNextPage}
        handlePagination={handlePagination}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default PopularMovie;
