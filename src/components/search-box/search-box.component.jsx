import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
