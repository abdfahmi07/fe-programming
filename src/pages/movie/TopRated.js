import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import { openMenu } from "../../features/featuresSlice";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";

function TopRatedMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu(false));
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOP_RATED);
    dispatch(updateMovie(response.data.results));
  }

  return (
    <div>
      <Hero endpoint={ENDPOINTS.TOP_RATED} />
      <Movies title="Top Rated Movies" />
    </div>
  );
}

export default TopRatedMovie;
