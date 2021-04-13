import './SearchBar.css';
import React from 'react';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = () => {
  const renderSortByOptions = () => {
    const sortedOptions = Object.keys(sortByOptions).map((option) => {
      const sortByOptionValue = sortByOptions[option];
      return <li key={sortByOptionValue}>{option}</li>;
    });
    return sortedOptions;
  };

  return (
    <div className='SearchBar'>
      <div className='SearchBar-sort-options'>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className='SearchBar-fields'>
        <input placeholder='Search Businesses' />
        <input placeholder='Where?' />
      </div>
      <div className='SearchBar-submit'>
        <a>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
