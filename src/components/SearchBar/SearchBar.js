import './SearchBar.css';
import React, { useState } from 'react';

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
    console.log(sortBy);
    searchYelp(term, location, sortBy);
  };

  const handleTermChange = ({ target }) => {
    setTerm(target.value);
  };

  const handleLocationChange = ({ target }) => {
    setLocation(target.value);
  };

  const handleSearch = (e) => {
    searchYelp(term, location, sortBy);
  };

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  };

  const renderSortByOptions = () => {
    const sortedOptions = Object.keys(sortByOptions).map((option) => {
      const sortByOptionValue = sortByOptions[option];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {option}
        </li>
      );
    });
    return sortedOptions;
  };

  return (
    <div className='SearchBar'>
      <div className='SearchBar-sort-options'>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className='SearchBar-fields'>
        <input
          placeholder='Search Businesses'
          value={term}
          onChange={handleTermChange}
        />
        <input
          placeholder='Where?'
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className='SearchBar-submit'>
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
