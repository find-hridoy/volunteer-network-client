import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Group 1329.png';

const AdminNavbar = () => {
    return (
        <>
            <div className="py-4 ml-5 pl-5">
                <NavLink className="navbar-brand" to="/home"> <img className="logo" src={logo} alt="Logo" /> </NavLink>
                <ul className="navbar-nav mb-2 mb-lg-0 mt-5">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/dashboard" >Volunteer register list</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/addEvent" >Add event</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AdminNavbar;