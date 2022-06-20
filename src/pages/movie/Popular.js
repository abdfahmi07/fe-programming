import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";
import { openMenu } from "../../features/featuresSlice";

function PopularMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu(false));
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <Hero endpoint={ENDPOINTS.POPULAR} />
      <Movies title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
