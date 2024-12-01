"use client";

const Pagination = ({ total, perPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / perPage);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <ul className="d-flex align-items-center style-none">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <li
          className={pageNumber === currentPage ? "active" : ""}
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
