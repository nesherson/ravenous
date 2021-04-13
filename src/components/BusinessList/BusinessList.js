import './BusinessList.css';
import React from 'react';
import Business from '../Business/Business';

const BusinessList = (props) => {
  const { businesses } = props;

  return (
    <div className='BusinessList'>
      {businesses.map((business) => {
        return <Business business={business} />;
      })}
    </div>
  );
};

export default BusinessList;
