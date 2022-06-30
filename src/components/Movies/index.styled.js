import styled from "styled-components";

const StyledMovies = styled.div`
  /* Small Screen */
  margin: 1rem;

  .movies {
    text-align: center;
  }

  .movies__title {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    color: ${({ colorSchema, theme }) =>
      theme.colors[colorSchema] || theme.colors.primary};
  }

  .movies__container {
    display: flex;
    flex-direction: column;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .movies__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;

    .movies__title {
      font-size: 2.375rem;
    }
  }
`;

export default StyledMovies;
