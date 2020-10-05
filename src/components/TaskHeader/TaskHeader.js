import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/Group 1329.png';

const TaskHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                            <li className="nav-item">
                                <NavLink className="nav-link ml-3 name_text" to="/eventTask" >{loggedInUser.name}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default TaskHeader;