import './BusinessList.css';
import React from 'react';
import Business from '../Business/Business';

const BusinessList = () => {
  return (
    <div className='BusinessList'>
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  );
};

export default BusinessList;
