import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMovies } from "../features/moviesSlice";
import { openMenu, openSearch } from "../features/featuresSlice";
import ENDPOINTS from "../utils/constant/endpoints";
import Hero from "../components/Hero";
import Movies from "../components/Movies";
import data from "../utils/constant/data";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    getLatestMovies();
  }, []);

  async function getLatestMovies() {
    try {
      dispatch(updateMovies(data));
    } catch (err) {}
  }

  return (
    <>
      <Hero endpoint={ENDPOINTS.MOVIE.HERO} type="MOVIE" />
      <Movies title="Latest Movies" />
    </>
  );
}

export default Home;
