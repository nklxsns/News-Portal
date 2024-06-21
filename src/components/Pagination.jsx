import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalNews,
  newsPerPage,
  currentPage,
  setcurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pages.push(i);
  }

  function handlePageChange(page) {
    setcurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="buttons-wrapper mb-5">
      {pages.map((page, index) => (
        <button
          className={
            page == currentPage
              ? "btn btn-outline-primary active"
              : "btn btn-outline-primary"
          }
          key={index}
          onClick={() => {handlePageChange(page)}}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
