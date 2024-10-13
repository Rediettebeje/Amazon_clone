import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
    
  return (
      <div className='header'>
          <Link to="/" >
          <img
              className='header_logo'
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
              />
                </Link>
          <div className='header_search'>
              <div>
                  <select className='nav_dropDown'>
                      <option value='All'>All</option>
                      <option value='Beauty'>Beauty</option>
                      <option value='FlowerPots'>Flower Pots</option>
                      <option value='Watch'>Watch</option>
                      <option value='Cloth'>Cloth</option>
                      <option value='Shoes'>Shoes</option>
                      <option value='Bathroommi'>Bathroommi</option>
                  </select>
              </div>
              <input className='header_searchInput' type='text' /> 
              < SearchIcon className="header_searchIcon"/>
          </div>
          <div className='header_nav'>
               <Link to={!user && '/login'} className='header_clearLink'>
              <div onClick={handleAuthenticaton} className='header_option'>
                  <span className='header_optionLineOne'> Hello {!user ?"guest" :user.email}</span>
                  <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                  </div>
              </Link>
              <Link to= "/orders" className='header_clearLink'> 
              <div className='header_option'>
                  <span className='header_optionLineOne'>Return</span>   
                  <span className='header_optionLinetwo'>& Order</span>
                  </div>
                  </Link>
              <div className='header_option'>
                  <span className='header_optionLineOne'>Your</span>
                  <span className='header_optionLinetwo'>Prime</span>
              </div>
          </div>
          <Link to="/checkout" className='header_clearLink'>
          <div className='header_optionBasket'>
              <ShoppingBasketIcon />
              <span className='header_optionLineTwo header_basketCount'>
                 {basket?.length}
              </span>
              </div>
          </Link>
          
      </div>
  )
}

export default Header