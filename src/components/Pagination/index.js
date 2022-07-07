import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledPagination from "./index.styled";

const Pagination = ({
  currentPage,
  handlePrevPage,
  handleNextPage,
  handlePagination,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= 5; i++) {
    pageNumber.push(i);
  }

  return (
    <StyledPagination>
      <ul className="pagination">
        <li
          onClick={handlePrevPage}
          className={`page__item previous ${currentPage === 1 && "disable"}`}
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </li>
        {pageNumber.map((number) => {
          return (
            <li
              onClick={() => handlePagination(number)}
              key={number}
              className={`page__item ${currentPage === number && "active"}`}
            >
              {number}
            </li>
          );
        })}
        <li
          onClick={handleNextPage}
          className={`page__item next ${currentPage === 5 && "disable"}`}
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </li>
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
