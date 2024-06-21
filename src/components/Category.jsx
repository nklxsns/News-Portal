import React from "react";
import "./Category.css";

const Category = ({ category, setCategory }) => {
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <div className="category-wrapper mb-3">
      <div className="display-6 fw-medium">
        Top Headlines
      </div>
      <div className="dropdown">
        <button
          className="btn btn-sm btn-outline-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {category == ""
            ? "Select Category"
            : category}
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {categories.map((item, index) => {
            return (
              <li
                className="dropdown-item"
                key={index}
                onClick={() => setCategory(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Category;
