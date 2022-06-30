import styled from "styled-components";

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${({ bgColor, theme }) =>
    theme.colors[bgColor] || theme.colors.primary};
  padding: 1rem;
  color: #fff;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar__header {
      flex-basis: 80%;
      text-align: center;
      order: 2;
      a {
        color: #fff;
        .navbar__brand {
          margin-bottom: 0;
        }
      }
    }

    .navbar__menu {
      position: fixed;
      height: 100%;
      width: 90%;
      z-index: 99;
      left: -999px;
      top: 66px;
      background-color: ${({ theme }) => theme.colors["dark-primary"]};
      padding: 1rem;
      transition: ease 0.3s;

      .navbar__list {
        list-style: none;
      }
      .navbar__item {
        margin-bottom: 1rem;
        a {
          color: #fff;
        }
      }
    }

    .navbar__toggle {
      display: flex;
      flex-direction: column;
      order: 1;

      span {
        width: 24px;
        height: 3px;
        background-color: #fff;
      }

      span:not(:last-child) {
        margin-bottom: 5px;
      }
    }

    .navbar__search {
      display: flex;
      justify-content: flex-end;
      flex-basis: 10%;
      order: 3;

      &__icon {
        cursor: pointer;
      }
    }

    .navbar__search__wrapper {
      display: flex;
      align-items: center;
      position: fixed;
      left: 0;
      top: 66px;
      background-color: #fff;
      height: 3.5rem;
      width: 100%;
      box-shadow: 0px 2px 5px #e5e5e5;
      padding: 0 1rem;

      .navbar__search__icon {
        color: #000;
      }

      input {
        background-color: transparent;
        border: none;
        height: 35px;
        width: 100%;
        padding: 0 15px;
        font-family: Poppins, sans-serif;
      }
    }

    .active {
      left: 0;
    }

    .hide {
      display: none;
    }
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    padding: 1rem 6rem;

    .navbar {
      .navbar__header {
        flex-basis: 15%;
        order: 0;
      }

      .navbar__menu {
        position: inherit;
        background-color: transparent;
        padding: 0;
        display: block;
        justify-self: flex-start;
        flex-basis: 40%;

        .navbar__list {
          display: flex;

          .navbar__item {
            margin: 0 1rem;
          }
        }
      }

      .navbar__toggle {
        display: none;
      }

      .navbar__search {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-basis: 45%;
        gap: 1rem;
      }

      .navbar__search__wrapper {
        padding: 0 7rem;
      }
    }
  }
`;

export default StyledNavbar;
