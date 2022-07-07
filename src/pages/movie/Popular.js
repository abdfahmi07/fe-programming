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
  setIsDropdownFilmOpen,
  setIsLoading,
  setMoviesCurrentPage,
} from "../../features/featuresSlice";
import Pagination from "../../components/Pagination";

function PopularMovie() {
  const currentPage = useSelector(
    (store) => store.featuresReducer.currentPage.movies.popular
  );
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
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "nowPlaying" }));
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "upcoming" }));
    dispatch(setMoviesCurrentPage({ pageNum: 1, type: "topRated" }));
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
      dispatch(setMoviesCurrentPage({ pageNum: number, type: "popular" }));
    }
  };
  const handlePrevPage = () => {
    if (currentPage !== 1) {
      dispatch(
        setMoviesCurrentPage({ pageNum: currentPage - 1, type: "popular" })
      );
    }
  };

  const handleNextPage = () => {
    if (currentPage !== 5) {
      dispatch(
        setMoviesCurrentPage({ pageNum: currentPage + 1, type: "popular" })
      );
    }
  };
  console.log(currentPage);
  return (
    <div>
      <Hero endpoint={ENDPOINTS.MOVIE.POPULAR()} type="MOVIE" />
      <Movies title="Popular Movies" />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePagination={handlePagination}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default PopularMovie;
