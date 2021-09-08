import React from 'react';
import { useLocation } from 'react-router';

function SearchForm() {
  const localtion = useLocation();
  return (
    <form action="#">
      <input
        type="text"
        className="search_input"
        placeholder="Search"
        required="required"
      ></input>
    </form>
  );
}

export default SearchForm;
