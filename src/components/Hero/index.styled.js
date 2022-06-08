import styled from "styled-components";

const StyledHero = styled.div`
  margin: 1rem;

  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;

    .hero__left {
      order: 2;
      margin-bottom: 1rem;

      .hero__title {
        color: ${({ colorSchema, theme }) =>
          theme.colors[colorSchema] || theme.colors.primary};
        margin: 1rem 0 0.5rem 0;
        font-size: 2.44rem;
      }

      .hero__genre {
        color: ${({ colorSchema, theme }) =>
          colorSchema === "secondary"
            ? theme.colors.primary
            : theme.colors.secondary};
        margin-bottom: 1rem;
        font-size: 1.59rem;
      }

      .hero__description {
        color: #64748b;
        margin-bottom: 1rem;
      }
    }

    .hero__right {
      order: 1;

      .hero__image {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
      }
    }
  }

  @media screen and (min-width: 992px) {
    max-width: 1200px;

    .hero {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;

      .hero__left {
        order: 1;
        flex-basis: 50%;
        padding-right: 2.5rem;

        .hero__title {
          margin: 0.5rem 0;
        }

        .hero__description {
          margin-bottom: 2rem;
        }
      }

      .hero__right {
        order: 2;
        flex-basis: 50%;

        .hero__image {
          float: right;
        }
      }
    }
  }
`;

export default StyledHero;
