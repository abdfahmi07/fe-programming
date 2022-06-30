import styled from "styled-components";

const StyledMovies = styled.div`
  margin: 1rem;

  .movies {
    text-align: center;
  }

  .movies__title {
    margin-bottom: 2rem;
    font-size: 1.75rem;
    color: ${({ colorSchema, theme }) =>
      theme.colors[colorSchema] || theme.colors.primary};
  }

  .movies__container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .movies__container {
      justify-content: flex-start;
      flex-direction: row;
      gap: 1.5rem;
    }
  }

  @media (min-width: 992px) {
    max-width: 1200px;

    .movies__title {
      font-size: 2.375rem;
    }
  }
`;

export default StyledMovies;
