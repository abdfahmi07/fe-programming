import styled from "styled-components";

const StyledPagination = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;

  .pagination {
    display: flex;
    justify-content: space-evenly;
    gap: 0.5rem;
    font-size: 0.875rem;
    list-style: none;

    .page__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.75rem;
      height: 1.75rem;
      background-color: transparent;
      border: 1px solid #e7e7e7;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    }

    .previous,
    .next {
      width: 2.5rem;
    }

    .active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }

    .disable {
      background-color: #d3d3d3;
      color: #fff;
      cursor: no-drop;
    }
  }
`;

export default StyledPagination;
