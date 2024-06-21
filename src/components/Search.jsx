import React from "react";

const Search = ({ search, setSearch }) => {
  var x = search;
  function handleClick() {
    setSearch(x);
  }

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search for News"
        aria-label="Search for News"
        aria-describedby="button-addon2"
        onChange={(e) => (x = e.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
