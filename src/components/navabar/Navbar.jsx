import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function navbar({setShowLogin}) {
    const [menu, setMenu] = useState('home');
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
     <Link to="/"> <img src={assets.logo} alt="" className="logo" /> </Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
            <a href='#explore-meu' onClick={()=>setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
            <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>moble-app</a>
            <a href='#footer' onClick={()=>setMenu('contact')} className={menu === 'contact' ? 'active': ''}>contact</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" className="search-icon" />
            <div className="navbar-search-icon">
               <Link to="/cart"><img src={assets.basket_icon} alt="" className="basket_icon" /></Link>
                <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default navbar