import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <StorefrontIcon className='header__logoImage' />
        <h2 className='header__logoTitle'>e-commerce website</h2>
      </div>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <ManageSearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='nav__item'>
          <span className='nav__itemLineOne'>Hello Guest</span>
          <span className='nav__itemLineTwo'>Signin</span>
        </div>
        <div className='nav__item'>
          <span className='nav__itemLineOne'>Your</span>
          <span className='nav__itemLineTwo'>Shop</span>
        </div>
        <div className='nav__itemBasket'>
          <ShoppingBasketIcon />

          <span className='nav__itemLineTwo nav_basketCount'>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
