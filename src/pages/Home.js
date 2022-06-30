import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMovies } from "../features/moviesSlice";
import { openMenu, openSearch } from "../features/featuresSlice";
import Main from "../components/Main";
import data from "../utils/constant/data";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    getLatestMovies();
  }, []);

  function getLatestMovies() {
    dispatch(updateMovies(data));
  }

  return (
    <>
      <Main />
    </>
  );
}

export default Home;
