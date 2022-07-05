import styled from "styled-components";

const StyledCast = styled.div`
  margin-bottom: 2rem;

  .header {
    &__title {
      padding-left: 1rem;
      margin-bottom: 1rem;
    }
  }

  .cast__wrapper {
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding: 0 1rem 2rem;

    &::-webkit-scrollbar {
      width: 12px;
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
      width: 2rem;
      border-radius: 10px;
    }

    .cast {
      display: flex;
      flex-direction: column;
      min-width: 130px;
      width: 130px;
      height: auto;
      box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
      border-radius: 10px;
      overflow: hidden;

      a {
        min-width: 130px;
        width: 130px;
        height: 175px;
        display: block;

        .cast__photo {
          width: 100%;
          height: 100%;
        }
      }

      &__info {
        padding: 0.625rem;

        .cast__original__name {
          font-size: 0.875rem;
          color: #2a3341;
          margin-bottom: 0.3125 rem;
        }

        .cast__character__name {
          font-size: 0.75rem;
          color: #7b8491;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .cast__wrapper {
      &::-webkit-scrollbar {
        height: 8px;
      }

      &::-webkit-scrollbar-thumb {
        width: 10rem;
      }

      .cast {
        min-width: 150px;
        width: 150px;

        a {
          min-width: 150px;
          width: 150px;
          height: 200px;
        }
      }
    }
  }
`;

export default StyledCast;
