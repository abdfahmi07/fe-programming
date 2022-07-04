import styled from "styled-components";

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${({ bgColor, theme }) =>
    theme.colors[bgColor] || theme.colors.primary};
  padding: 1rem;
  color: #fff;
  z-index: 999;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar__header {
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
      width: 70%;
      z-index: 99;
      left: -999px;
      top: 66px;
      background-color: ${({ theme }) => theme.colors["dark-primary"]};
      padding: 1rem;
      transition: ease 0.3s;

      .navbar__list,
      .navbar__sublist {
        list-style: none;
      }
      .navbar__item {
        margin-bottom: 1.125rem;

        .item__title {
          display: flex;
          align-items: center;
          cursor: pointer;

          .icon {
            transition: 0.3s;
          }

          .title {
            font-size: 1rem;
            font-weight: 500;
            margin-right: 0.5rem;
          }
        }

        .navbar__sublist {
          margin-top: 0.5rem;
          .navbar__subitem {
            margin-bottom: 0.3125rem;
            a {
              font-size: 0.875rem;
              color: #fff;
            }
          }
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

      .search__icon {
        color: #000;
      }

      .search__input {
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

  @media screen and (min-width: 768px) {
  }

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
          position: relative;

          .navbar__item {
            margin: 0 1rem;

            .title {
              margin-bottom: 0;
            }

            .navbar__sublist {
              position: absolute;
              background-color: #fff;
              width: 12rem;
              height: auto;
              border-radius: 10px;
              border: 1px solid #ebebeb;
              top: 35px;
              overflow: hidden;
              padding: 0.5rem 0;

              .navbar__subitem {
                margin-bottom: 0;

                &:hover {
                  background-color: #f2f2f2;
                }

                a {
                  display: block;
                  padding: 0.3125rem 1rem;
                  color: #36404e;
                }
              }
            }
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
