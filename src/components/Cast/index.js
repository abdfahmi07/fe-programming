import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StyledCast from "./index.styled";
import imgNotFound from "../../assets/not-found.jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { isMobileRgx } from "../../helpers";

const Cast = ({ title }) => {
  const movie = useSelector((store) => store.moviesReducer.movieDetail);
  const { credits } = movie;

  return (
    <StyledCast>
      <header className="header">
        <h3 className="header__title">{`${title} Cast`} </h3>
      </header>
      {movie ? (
        <div className="cast__wrapper">
          {credits.cast.map((cast) => {
            const id = nanoid();

            return (
              <div key={id} className="cast">
                <Link to="">
                  <img
                    className="cast__photo"
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/${
                            !isMobileRgx ? "w138_and_h175" : "w240_and_h266"
                          }_face/${cast.profile_path}`
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
      ) : (
        <Skeleton height={"200px"} borderRadius={"0.625rem"} enableAnimation />
      )}
    </StyledCast>
  );
};

export default Cast;
