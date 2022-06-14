import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import StyledHero from "./index.styled";
import ENDPOINTS from "../../utils/constant/endpoints";
import { Link } from "react-router-dom";

function Hero({ endpoint }) {
  const [movie, setMovie] = useState("");

  const movieGenres =
    movie && movie.genres.map((genre) => genre.name).join(", ");
  const movieTrailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0]?.key}`;

  useEffect(() => {
    getDetailMovie();
  }, []);

  async function getBannerMovies() {
    const response = await axios(endpoint);
    const randomIdx = Math.floor(Math.random() * response.data.results.length);

    return response.data.results[randomIdx];
  }

  async function getDetailMovie() {
    const bannerMovie = await getBannerMovies();
    const movieId = bannerMovie.id;

    const response = await axios(ENDPOINTS.DETAIL(movieId));

    setMovie(response.data);
  }

  return (
    <StyledHero colorSchema="primary">
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.title}</h2>
          <h3 className="hero__genre">{movieGenres}</h3>
          <p className="hero__description">{movie.overview}</p>
          <Button
            className="hero__btn__trailer"
            colorSchema="primary"
            size="md"
            as="a"
            href={movieTrailer}
            target="_blank"
          >
            <FontAwesomeIcon className="hero__icon" icon="fa-solid fa-play" />
            Watch Trailer
          </Button>
          <Link to={`/movie/${movie.id}`}>
            <Button colorSchema="primary" variant="outline" size="md">
              <FontAwesomeIcon
                icon="fa-solid fa-info"
                style={{ color: "#4895ef" }}
              />
            </Button>
          </Link>
        </div>
        <div className="hero__right">
          <img
            className="hero__image"
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : "https://picsum.photos/600/400"
            }
            alt="hero"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
