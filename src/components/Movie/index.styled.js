import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 2rem;

  .movie__image {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 0.625rem;
  }

  .movie__title {
    color: ${({ colorSchema, theme }) =>
      theme.colors[colorSchema] || theme.colors.primary};
    font-size: 1.3125rem;
    margin-bottom: 0.275rem;
  }

  .movie__date {
    color: #64748b;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
    margin-bottom: 1rem;

    .movie__title {
      font-size: 1.5rem;
    }
  }
`;

export default StyledMovie;
