import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className="container">
            <NavLink className="logo" to='/'>
                <h1>Car</h1>
            </NavLink>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/cars'>Cars</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/car/new'>Add Car</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;