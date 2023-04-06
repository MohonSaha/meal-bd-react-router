import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../public/hot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container'>
            <div className='img-container'>
                <img src={Logo} alt="" />
                
                <NavLink className=" cart-icon {({ isActive }) => (isActive ? 'active' : 'default')}" to="/order"><FontAwesomeIcon className="" icon={faCartShopping} /></NavLink>

            </div>

            <div className='nav-item-container'>
                <NavLink className="nav-item {({ isActive }) => (isActive ? 'active' : 'default')}" to="/">Home</NavLink>

                <NavLink className="nav-item {({ isActive }) => (isActive ? 'active' : 'default')}" to="/food">Food</NavLink>

                <NavLink className="nav-item {({ isActive }) => (isActive ? 'active' : 'default')}" to="/order">Order</NavLink>

                <NavLink className="nav-item {({ isActive }) => (isActive ? 'active' : 'default')}" to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;