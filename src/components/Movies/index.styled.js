import styled from "styled-components";

const StyledMovies = styled.div`
  /* Small Screen */
  margin: 1rem;

  .movies {
    margin: 5rem 0;
    text-align: center;
  }

  .movies__title {
    margin-bottom: 1rem;
    font-size: 2.44rem;
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
    margin: 3rem auto;
  }
`;

export default StyledMovies;
