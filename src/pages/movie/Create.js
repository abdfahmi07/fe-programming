import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddMovieForm from "../../components/AddMovieForm";
import Hero from "../../components/Hero";
import { openMenu, openSearch } from "../../features/featuresSlice";
import ENDPOINTS from "../../utils/constant/endpoints";

function CreateMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSearch(false));
    dispatch(openMenu(false));
  }, []);

  return (
    <div>
      <Hero endpoint={ENDPOINTS.HERO} />
      <AddMovieForm />
    </div>
  );
}

export default CreateMovie;
