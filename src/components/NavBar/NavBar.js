import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

function NavBar({ currentUser, logout }) {
    return (
        <nav>
            <div className="container">
                <h4 className="site-logo">Car Talk</h4>
                <NavLink className="logo" to='/'>
                    
                    {/* <h1>Car</h1> */}
                </NavLink>
                <ul className='nav-list'>
                    
                    {currentUser ? (
                        <React.Fragment>
                            <li className='nav-item'>
                                <NavLink className='nav-link' exact to='/'>Home</NavLink>
                            </li>
                            <li className='nav-item'>
                            <NavLink className='nav-link' to='/cars'>Cars</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/cars/new'>Add Car</NavLink>
                            </li>
                            <li className='nav-item'>
                                <span onClick={logout} className='nav-link'>Logout</span>
                            </li>
                    </React.Fragment>
                    ) : 
                    (
                        <>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/register'>Register</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/login'>Login</NavLink>
                            </li>
                        </>
                    )
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;