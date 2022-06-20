import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/moviesSlice";
import Alert from "../Alert";
import Button from "../ui/Button";
import StyledAddMovieForm from "./index.styled";
import FormLogo from "../../assets/add-movie.svg";

function AddMovieForm() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    type: "",
    poster: "",
  });
  const [isError, setIsError] = useState({
    isTitleError: false,
    isYearError: false,
    isTypeError: false,
    isPosterError: false,
  });

  const { title, year, type, poster } = formData;
  const { isTitleError, isYearError, isTypeError, isPosterError } = isError;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title === "") {
      setIsError({
        ...isError,
        isTitleError: true,
      });

      return false;
    } else if (year === "") {
      setIsError({
        ...isError,
        isTitleError: false,
        isYearError: true,
      });

      return false;
    } else if (type === "") {
      setIsError({
        ...isError,
        isYearError: false,
        isTypeError: true,
      });

      return false;
    } else if (poster === "") {
      setIsError({
        ...isError,
        isTypeError: false,
        isPosterError: true,
      });

      return false;
    } else {
      setIsError({
        isTitleError: false,
        isYearError: false,
        isTypeError: false,
        isPosterError: false,
      });

      return true;
    }
  }

  function submitMovie() {
    const movie = {
      id: nanoid(),
      title,
      year,
      type,
      poster,
    };

    dispatch(addMovie(movie));
    navigation("/");

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

    validate() && submitMovie() && resetForm();
  }

  return (
    <StyledAddMovieForm>
      <section className="movie__form">
        <div className="movie__form__left">
          <img
            className="movie__form__image"
            src={FormLogo}
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
              <Button colorSchema="primary" size="lg" full>
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
