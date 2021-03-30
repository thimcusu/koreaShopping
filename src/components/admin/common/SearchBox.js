import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchBoxWrapper, SearchBar, DropDown } from './WrapperPage';
import DropDownFilter from '../common/DropDownFilter';

import { filterCategories, catsToListFilter } from '../../../utils/category';

function SearchBox({ placeHoder = 'Search', filterLabel = 'Filter' }) {
  const [filter, setFilter] = useState({ id: undefined });
  const listFilters = catsToListFilter(filterCategories);
  return (
    <SearchBar>
      <DropDownFilter
        filterLabel={filterLabel}
        filters={filterCategories}
        listFilters={listFilters}
      />
      <input
        id="email"
        className=""
        type="search"
        name="email"
        placeholder={`${placeHoder}...`}
        autoComplete="off"
      />
    </SearchBar>
  );
}

export default SearchBox;
