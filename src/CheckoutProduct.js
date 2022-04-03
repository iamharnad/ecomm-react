import React from 'react';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className='checkoutProduct'>
      <img src={image} alt='' className='checkoutProduct__image' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button>remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
