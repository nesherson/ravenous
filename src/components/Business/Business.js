import './Business.css';
import React from 'react';

const Business = ({ business }) => {
  const {
    imageSrc,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
  } = business;

  return (
    <div className='Business'>
      <div className='image-container'>
        <img src={imageSrc} alt='' />
      </div>
      <h2>MarginOtto Pizzeria</h2>
      <div className='Business-information'>
        <div className='Business-address'>
          <p>{address}</p>
          <p>{city}</p>
          <p>{`${state} ${zipCode}`}</p>
        </div>
        <div className='Business-reviews'>
          <h3>{category}</h3>
          <h3 className='rating'>{rating}</h3>
          <p>`${reviewCount} reviews`</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
