import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Header = () => {
    const menuItem = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/service">Service</Link></li>
    <li><Link to="/about">About</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 mb-6 md:w-3/4 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {menuItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl lg:block hidden"><img className='h-12 w-auto' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn mr-2">Log In</Link>
                <Link to="/regester" className="btn">Sing Up</Link>
            </div>
        </div>
    );
};

export default Header;