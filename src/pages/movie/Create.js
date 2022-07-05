import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddMovieForm from "../../components/AddMovieForm";
import Hero from "../../components/Hero";
import {
  openMenu,
  openSearch,
  setIsDropdownFilmOpen,
  setIsDropdownTvOpen,
} from "../../features/featuresSlice";
import ENDPOINTS from "../../utils/constant/endpoints";

function CreateMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSearch(false));
    dispatch(openMenu(false));
    dispatch(setIsDropdownFilmOpen(false));
    dispatch(setIsDropdownTvOpen(false));
  }, []);

  return (
    <div>
      <Hero endpoint={ENDPOINTS.MOVIE.HERO} type="MOVIE" />
      <AddMovieForm />
    </div>
  );
}

export default CreateMovie;
