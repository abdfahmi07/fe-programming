import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMovie } from "../features/moviesSlice";
import Main from "../components/Main";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.moviesReducer.movies);

  useEffect(() => {
    getLatestMovies();
  }, []);

  function getLatestMovies() {
    dispatch(updateMovie(movies));
  }

  return (
    <>
      <Main />
    </>
  );
}

export default Home;
