import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import StyledDetailMovie from "./index.styled";
import ENDPOINTS from "../../utils/constant/endpoints";

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const movieGenres =
    movie && movie.genres.map((genre) => genre.name).join(", ");
  const movieTrailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0]?.key}`;
  const movieReleaseYear = movie && movie.release_date.substr(0, 4);
  const watchProviders =
    movie && movie["watch/providers"].results?.ID?.flatrate;
  const watchLink = movie && movie["watch/providers"].results?.ID?.link;

  useEffect(() => {
    getDetailMovie();
  }, [id]);

  async function getDetailMovie() {
    const response = await axios(
      ENDPOINTS.DETAIL(id, ["videos", "credits", "watch/providers"])
    );

    setMovie(response.data);
  }

  return (
    <StyledDetailMovie colorSchema="primary">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h2>
          {movie.title} {`(${movieReleaseYear})`}
        </h2>
        <h3>{movieGenres}</h3>
        <p>{movie.overview}</p>
        {watchProviders && (
          <div className="watch__providers">
            <div className="title">
              <h4>Available on Stream</h4>
            </div>
            <div className="providers">
              {watchProviders.map((watchProvider, idx) => (
                <a key={idx} href={watchLink} target="_blank" rel="noreferrer">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${watchProvider.logo_path}`}
                    alt={watchProvider.provider_name}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
        <Button
          colorSchema="primary"
          as="a"
          href={movieTrailer}
          target="_blank"
        >
          <FontAwesomeIcon className="icon__detail" icon="fa-solid fa-play" />
          Watch Trailer
        </Button>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
