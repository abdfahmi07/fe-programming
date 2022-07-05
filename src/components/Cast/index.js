import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StyledCast from "./index.styled";
import imgNotFound from "../../assets/not-found.jpg";

const Cast = ({ title }) => {
  const movie = useSelector((store) => store.moviesReducer.movieDetail);
  const { credits } = movie;

  return (
    <StyledCast>
      <header className="header">
        <h3 className="header__title">{title} Cast</h3>
      </header>
      <div className="cast__wrapper">
        {movie &&
          credits.cast.map((cast) => {
            const id = nanoid();

            return (
              <div key={id} className="cast">
                <Link to="">
                  <img
                    className="cast__photo"
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                        : imgNotFound
                    }
                    alt="Name"
                  />
                </Link>
                <div className="cast__info">
                  <h4 className="cast__original__name">{cast.original_name}</h4>
                  <p className="cast__character__name">{cast.character}</p>
                </div>
              </div>
            );
          })}
      </div>
    </StyledCast>
  );
};

export default Cast;
