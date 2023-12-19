import React from 'react';

const Tour = ({ tour, onNotInterested }) => {
  const { name, info, image, price } = tour;

  return (
<div className="product-container">
  <div className="product-banner">
    <div className="image-container">
      <img src={image} alt={name} className='img'/>
    </div>
    <div className="content-container">
      <h2>{name}</h2>
      <p className='price'>${price}</p>
        <p>{info}</p>
        <button className="not" onClick={onNotInterested}>
          Not Interested
        </button>
    </div>
  </div>
</div>
  );
};

export default Tour;


