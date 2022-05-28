import Button from "../ui/Button";
import StyledHero from "./index.styled";

function Hero() {
  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">Spiderman</h2>
          <h3 className="hero__genre">Genre: Drama, Thriller</h3>
          <p className="hero__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            suscipit sapiente ipsum soluta at repudiandae deserunt incidunt
            error illum reprehenderit!
          </p>
          <Button variant="primary" size="md">
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <img
            className="hero__image"
            src="https://picsum.photos/600/400"
            alt="hero"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
