import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert";
import Button from "../ui/Button";
import StyledAddMovieForm from "./index.styled";

function AddMovieForm(props) {
  const { movies, setMovies } = props;
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    type: "",
    poster: "",
  });

  const [isTitleError, setIsTitleError] = useState(false);
  const [isYearError, setIsYearError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  const { title, year, type, poster } = formData;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (year === "") {
      setIsTitleError(false);
      setIsYearError(true);
      return false;
    } else if (type === "") {
      setIsYearError(false);
      setIsTypeError(true);
      return false;
    } else if (poster === "") {
      setIsTypeError(false);
      setIsPosterError(true);
      return false;
    } else {
      setIsTitleError(false);
      setIsYearError(false);
      setIsTypeError(false);
      setIsPosterError(false);
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title,
      year,
      type,
      poster,
    };

    setMovies([...movies, movie]);

    return true;
  }

  function resetForm() {
    setFormData({
      title: "",
      year: "",
      type: "",
      poster: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie() && resetForm();
  }

  return (
    <StyledAddMovieForm>
      <section className="movie__form">
        <div className="movie__form__left">
          <img
            className="movie__form__image"
            src="https://picsum.photos/600/400"
            alt="Form Thumbnail"
          />
        </div>
        <div className="movie__form__right">
          <h2 className="movie__form__title">Add Movie</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__group input__group">
              <label className="form__label" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                className="form__input"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Movie Title"
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className="form__group input__group">
              <label className="form__label" htmlFor="year">
                Year
              </label>
              <input
                id="year"
                className="form__input"
                type="number"
                name="year"
                min="1900"
                value={year}
                onChange={handleChange}
                placeholder="Release Year"
              />
              {isYearError && <Alert>Year Wajib Diisi</Alert>}
            </div>
            <div className="form__group input__group">
              <label className="form__label" htmlFor="type">
                Type
              </label>
              <select
                className="form__input"
                id="type"
                name="type"
                value={type}
                onChange={handleChange}
              >
                <option value="">Select Type of Film</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
                <option value="thriller">Thriller</option>
              </select>
              {isTypeError && <Alert>Type Wajib Diisi</Alert>}
            </div>
            <div className="form__group input__group">
              <label className="form__label" htmlFor="poster">
                Poster
              </label>
              <input
                id="poster"
                className="form__input"
                type="text"
                name="poster"
                value={poster}
                onChange={handleChange}
                placeholder="URL Poster"
              />
              {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div className="form__group">
              <Button variant="primary" size="lg" full>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
    </StyledAddMovieForm>
  );
}

export default AddMovieForm;
