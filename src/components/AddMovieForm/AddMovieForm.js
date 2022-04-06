import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
  const { movies, setMovies } = props;

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [isTitleError, setIsTitleError] = useState(false);
  const [isYearError, setIsYearError] = useState(false);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleYear(e) {
    setYear(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "") {
      setIsTitleError(true);
    } else if (year === "") {
      setIsTitleError(false);
      setIsYearError(true);
    } else {
      const movie = {
        id: nanoid(),
        title,
        year,
        type: "Movie",
        poster: "https://picsum.photos/300/400",
      };

      setMovies([...movies, movie]);
      setTitle("");
      setYear("");
      setIsTitleError(false);
      setIsYearError(false);
    }
  }
  return (
    <div className={styles.container}>
      <section className={styles.movie__form}>
        <div className={styles.movie__form__left}>
          <img
            className={styles.movie__form__image}
            src="https://picsum.photos/600/400"
            alt=""
          />
        </div>
        <div className={styles.movie__form__right}>
          <h2 className={styles.movie__form__title}>Add Movie</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="title">
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                value={title}
                onChange={handleTitle}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="year">
                Year
              </label>
              <input
                id="year"
                className={styles.form__input}
                type="text"
                value={year}
                onChange={handleYear}
              />
              {isYearError && <Alert>Year Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <button className={styles.form__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
