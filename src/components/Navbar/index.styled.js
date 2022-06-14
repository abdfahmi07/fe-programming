import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  background-color: ${({ bgColor, theme }) =>
    theme.colors[bgColor] || theme.colors.primary};
  padding: 1rem;
  color: #fff;

  .navbar {
    .navbar__left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .navbar__header {
        a {
          color: #fff;
          .navbar__brand {
            margin-bottom: 0;
          }
        }
      }

      .navbar__toggle {
        display: flex;
        flex-direction: column;
        transform: rotate(0deg);
        transition: 0.5s ease-in-out;
        span {
          width: 24px;
          height: 3px;
          background-color: #fff;
          opacity: 1;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }

        span:nth-child(1),
        span:nth-child(2),
        span:nth-child(3) {
          transform-origin: left center;
        }

        span:not(:last-child) {
          margin-bottom: 5px;
        }
      }

      .navbar__toggle.open {
        span:nth-child(1) {
          transform: rotate(45deg);
        }

        span:nth-child(2) {
          width: 0%;
          opacity: 0;
        }

        span:nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    }

    .navbar__right {
      margin-top: 1rem;
      .navbar__list {
        list-style: none;
        .navbar__item {
          margin-bottom: 1rem;
          a {
            color: #fff;
          }
        }
      }
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar__left {
        .navbar__toggle {
          display: none;
        }
      }

      .navbar__right {
        margin-top: 0;
        display: block;
        .navbar__list {
          display: flex;
          .navbar__item {
            margin: 0 1rem;
          }
        }
      }
    }
  }
`;

export default StyledNavbar;
