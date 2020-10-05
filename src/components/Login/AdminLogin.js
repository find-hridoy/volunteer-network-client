import React, { useContext, useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { initializeFramework, signInWithEmailAndPassword } from './LoginManager';
import logo from '../../images/Group 1329.png';

const AdminLogin = () => {
    //initialize 
    initializeFramework();
    const [user, setUser] = useState({
        email: "",
        password: "",
        error: "",
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 5;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordHasNumber && isPasswordValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                })
                .catch(error => {
                    setUser(error);
                })
        }
        e.preventDefault();
    }
    return (
        <div>
            <div className="register_form d-flex align-items-center justify-content-center flex-column">
                <NavLink className="navbar-brand mb-5" to="/home"> <img className="logo" src={logo} alt="Logo" /> </NavLink>
                <div className="card register_card">
                    <div className="card-body">
                        <h4 className="register_title py-3">Admin Login</h4>
                        <form onSubmit={handleSubmit}>
                            <input
                                onBlur={handleBlur}
                                className="register_input"
                                name="email"
                                type="email"
                                placeholder="Username or Email"
                            />

                            <input
                                onBlur={handleBlur}
                                className="register_input"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            {/* Button */}
                            <button className="button register_btn w-100 rounded-0 my-4" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;