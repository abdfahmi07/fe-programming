import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
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
          <form className={styles.form} action="#">
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="title">
                Title
              </label>
              <input id="title" className={styles.form__input} type="text" />
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="year">
                Year
              </label>
              <input id="year" className={styles.form__input} type="text" />
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
