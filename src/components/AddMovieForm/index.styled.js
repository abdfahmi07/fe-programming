import styled from "styled-components";

const StyledAddMovieForm = styled.div`
  margin: 1rem;

  .movie__form {
    display: flex;
    flex-direction: column;

    .movie__form__image {
      display: none;
      max-width: 100%;
      border-radius: 25px;
    }

    .movie__form__title {
      text-align: center;
      color: ${({ colorSchema, theme }) =>
        theme.colors[colorSchema] || theme.colors.primary};
      font-size: 1.75rem;
    }

    .form {
      padding: 1rem;

      .input__group {
        display: flex;
        flex-direction: column;
      }

      .form__group {
        margin-bottom: 1rem;
      }

      .form__label {
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #64748b;
      }

      .form__input {
        height: 40px;
        border: 1px solid
          ${({ colorSchema, theme }) =>
            theme.colors[colorSchema] || theme.colors.primary};
        border-radius: 5px;
        padding: 0px 1rem;
        color: #2f343b;
        font-size: 0.875rem;
        font-family: "Poppins", sans-serif;
      }
    }
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 2rem;

    .movie__form {
      flex-direction: row;
      align-items: center;

      .movie__form__left {
        flex-basis: 60%;
        .movie__form__image {
          display: block;
        }
      }

      .movie__form__right {
        flex-basis: 40%;

        .movie__form__title {
          font-size: 2.375rem;
        }
      }
    }
  }
`;

export default StyledAddMovieForm;
