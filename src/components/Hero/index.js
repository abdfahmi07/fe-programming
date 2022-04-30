import styles from "./style.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__genre}>Genre: Drama, Thriller</h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            suscipit sapiente ipsum soluta at repudiandae deserunt incidunt
            error illum reprehenderit!
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src="https://picsum.photos/600/400"
            alt="hero"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
