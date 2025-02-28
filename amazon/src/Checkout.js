import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
      <div className='Checkout'>
          <div className='checkout_left'>
               <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
           <h3>Hello</h3>
        <h2 className="checkout__title">Your shopping Basket</h2> 
       {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          </div>
           <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout