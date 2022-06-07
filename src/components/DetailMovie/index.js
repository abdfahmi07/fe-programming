import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    getDetailMovie();
  }, [id]);

  async function getDetailMovie() {
    const response = await axios(ENDPOINTS.DETAIL(id));

    setMovie(response.data);
  }

  return (
    <>
      <StyledDetailMovie>
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
          <Button as="a" href={movieTrailer} target="_blank">
            Watch Trailer
          </Button>
        </div>
      </StyledDetailMovie>
    </>
  );
}

export default DetailMovie;
