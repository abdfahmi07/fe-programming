import styled from "styled-components";

const StyledDetailMovie = styled.div`
  margin: 3rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  .poster {
    img {
      border-radius: 15px;
      max-width: 100%;
      height: auto;
    }
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: ${({ colorSchema, theme }) =>
      theme.colors[colorSchema] || theme.colors.primary};
  }

  h3 {
    font-size: 1.3125rem;
  }

  h3,
  h4 {
    margin-bottom: 0.5rem;
    color: ${({ colorSchema, theme }) =>
      colorSchema === "secondary"
        ? theme.colors.primary
        : theme.colors.secondary};
  }

  p {
    text-align: justify;
    margin-bottom: 1rem;
    color: #64748b;
  }

  .watch__providers {
    margin-bottom: 2rem;
    .providers {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      img {
        border-radius: 7px;
        max-width: 40px;
      }
    }
  }

  .icon__detail {
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 1.5rem;

    .poster {
      flex-basis: 30%;
    }

    .info {
      flex-basis: 60%;
    }

    .watch__providers {
      .providers {
        justify-content: flex-start;
      }
    }
  }

  @media screen and (min-width: 992px) {
    margin: 4rem 1rem 2rem 1rem;

    h2 {
      font-size: 2.375rem;
    }

    h3 {
      font-size: 1.625rem;
    }

    h4 {
      font-size: 1.25rem;
    }

    .watch__providers {
      .providers {
        img {
          border-radius: 10px;
          max-width: 50px;
        }
      }
    }
  }
`;

export default StyledDetailMovie;
