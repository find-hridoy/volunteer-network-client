import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../images/Group 1329.png';

const Header = () => {
    const history = useHistory();
    const handleGoingAdmin = () => {
        history.push('/adminLogin');
    }
    const handleGoingRegister = () => {
        alert('Please choice an event');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/home"> <img className="logo" src={logo} alt="Logo" /> </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/donation" >Donation</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/eventTasks" >Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/blog" >Blog</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <button onClick={handleGoingRegister} className="button register_btn ml-3" type="submit">Register</button>
                            <button onClick={handleGoingAdmin} className="button admin_btn ml-2" type="submit">Admin</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;