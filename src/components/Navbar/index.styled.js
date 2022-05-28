import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  background-color: ${({ bgColor, theme }) =>
    theme.colors[bgColor] || theme.colors.primary};
  padding: 1rem;
  color: #fff;

  .navbar {
    .navbar__left {
      .navbar__brand {
        margin-bottom: 1rem;
      }
    }

    .navbar__right {
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
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .navbar__left {
        .navbar__brand {
          margin-bottom: 0;
        }
      }

      .navbar__right {
        .navbar__list {
          display: flex;
          .navbar__item {
            margin: 0 1rem;
          }
        }
      }
    }
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    padding: 1rem 6rem;
  }
`;

export default StyledNavbar;
