import styled from "styled-components";

const StyledMovie = styled.div`
  width: 100%;
  height: 10rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  text-align: left;
  transition: all 0.3s;

  .movie {
    display: flex;
    height: 100%;

    .movie__thumbnail {
      .movie__image {
        height: 100%;
      }
    }

    .movie__info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      overflow-y: auto;

      .movie__title {
        color: ${({ colorSchema, theme }) =>
          theme.colors[colorSchema] || theme.colors.primary};
        margin-bottom: 0.3125rem;
        font-size: 1rem;
      }

      .movie__date {
        color: #64748b;
        font-size: 0.875rem;
        margin-bottom: 8px;
      }

      .movie__overview {
        color: #64748b;
        font-size: 0.75rem;
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    width: 13rem;
    height: auto;

    &:hover {
      transform: translateY(-10px);
    }

    .movie {
      display: block;

      .movie__thumbnail {
        .movie__image {
          display: block;
          max-width: 100%;
          height: auto;
        }
      }

      .movie__info {
        .movie__title {
          font-size: 1.125rem;
        }
      }
    }
  }

  @media (min-width: 992px) {
  }
`;

export default StyledMovie;
