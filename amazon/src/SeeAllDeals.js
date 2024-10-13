import React from 'react';
import "./SeeAllDeals.css";
import { useStateValue } from "./StateProvider";

function SeeAllDeals({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='seeAllDeals'>
      <div className='seeAllDeals__left'>
        <img src={image} alt='' />
      </div>
      <div className='seeAllDeals__right'>
        <div className='product_info'>
          <p>{title}</p>
          <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product_rating'>
            {Array(rating).fill().map(() => (
              <p>🌟</p>
            ))}
          </div>
        </div>
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default SeeAllDeals;
