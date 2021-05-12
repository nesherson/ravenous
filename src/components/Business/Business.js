import './Business.css';
import React from 'react';

const Business = ({ business }) => {
  const {
    name,
    imageSrc,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
    url,
  } = business;

  const mapUrl = `http://maps.google.com/?q=${address}`;

  return (
    <div className='Business'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <div className='image-container'>
          <img src={imageSrc} alt='' />
        </div>
      </a>
      <h2>{name}</h2>
      <div className='Business-information'>
        <div className='Business-address'>
          <p>
            <a href={mapUrl} target='_blank' rel='noopener noreferrer'>
              {address}
            </a>
          </p>
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
