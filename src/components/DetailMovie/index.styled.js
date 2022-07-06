import styled from "styled-components";

const StyledDetailMovie = styled.div`
  margin: 3rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  .movie__poster {
    img {
      border-radius: 15px;
      max-width: 100%;
      height: auto;
    }
  }

  .movie__info {
    .movie__title {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
      color: ${({ colorSchema, theme }) =>
        theme.colors[colorSchema] || theme.colors.primary};
    }

    .movie__genres {
      font-size: 1.3125rem;
      margin-bottom: 0.5rem;
      color: ${({ colorSchema, theme }) =>
        colorSchema === "secondary"
          ? theme.colors.primary
          : theme.colors.secondary};
    }

    .movie__overview {
      text-align: justify;
      margin-bottom: 1rem;
      color: #64748b;
    }

    .watch__providers {
      margin-bottom: 1.3125rem;
      .title {
        margin-bottom: 0.5rem;
        color: ${({ colorSchema, theme }) =>
          colorSchema === "secondary"
            ? theme.colors.primary
            : theme.colors.secondary};
      }
      .providers {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        a {
          width: 45px;
          img {
            border-radius: 7px;
            max-width: 100%;
          }
        }
      }
    }

    .icon__detail {
      margin-right: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 1.5rem;

    .movie__poster {
      flex-basis: 30%;
    }

    .movie__info {
      flex-basis: 60%;

      .watch__providers {
        .providers {
          justify-content: flex-start;
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    margin: 4rem 1rem 2rem 1rem;

    .movie__info {
      .movie__title {
        font-size: 2.375rem;
      }

      .movie__genres {
        font-size: 1.625rem;
      }

      .watch__providers {
        .title {
          h4 {
            font-size: 1.25rem;
          }
        }
        .providers {
          a {
            width: 50px;
            img {
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
`;

export default StyledDetailMovie;
