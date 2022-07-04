import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import StyledHero from "./index.styled";
import ENDPOINTS from "../../utils/constant/endpoints";
import { updateMovie } from "../../features/moviesSlice";

const Hero = ({ endpoint, type = "MOVIE" }) => {
  const movie = useSelector((store) => store.moviesReducer.movie);
  const dispatch = useDispatch();

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
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

    const response = await axios(ENDPOINTS[type].DETAIL(movieId));

    dispatch(updateMovie(response.data));
  }

  return (
    <StyledHero colorSchema="primary">
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.title || movie.name}</h2>
          <h3 className="hero__genre">{genres}</h3>
          <p className="hero__description">{movie.overview}</p>
          <Button
            className="hero__btn__trailer"
            colorSchema="primary"
            size="md"
            as="a"
            href={trailer}
            target="_blank"
          >
            <FontAwesomeIcon className="hero__icon" icon="fa-solid fa-play" />
            Watch Trailer
          </Button>
          <Link to={movie.title ? `/movie/${movie.id}` : `/tv/${movie.id}`}>
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
};

export default Hero;
