import AddMovieForm from "../../components/AddMovieForm";
import Hero from "../../components/Hero";
import ENDPOINTS from "../../utils/constant/endpoints";

function CreateMovie() {
  return (
    <div>
      <Hero endpoint={ENDPOINTS.HERO} />
      <AddMovieForm />
    </div>
  );
}

export default CreateMovie;
