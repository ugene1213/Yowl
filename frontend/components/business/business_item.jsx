import React from 'react';
import { Link } from 'react-router';

const BusinessItem =  ({ business: { name, description, picture, id}, counter }) => {

  const link = `/businesses/${id}`;

  return (
  <li className="business-item group">

    <img
      src={ window.yowlAssets[picture]}
      className="business-photo"
      />
    <div className="business-item-info">
      <h4>
        { counter }.<Link to={ link } className="business-link">{ name }</Link>
      </h4>

      <p className="business-description">
        { description }
      </p>
    </div>
  </li>
  );
};


export default BusinessItem;
