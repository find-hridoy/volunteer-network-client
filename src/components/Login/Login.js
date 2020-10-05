import React, { useContext } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/Group 1329.png';
import { googleSignIn, initializeFramework } from './LoginManager';

const Login = () => {
    //Context use
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //Private Route element 
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    // Initialize
    initializeFramework();
    //Google SignIn function
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                // console.log(res);
                setLoggedInUser(res);
                history.replace(from);
            })
            .catch(err => {
                // console.log(err);
                setLoggedInUser(err);
            })
    }
    return (
        <>
            <div className="login_form d-flex align-items-center justify-content-center flex-column">
                <NavLink className="navbar-brand mb-5" to="/home"> <img className="logo" src={logo} alt="Logo" /> </NavLink>
                <div className="card login_card">
                    <div className="card-body p-5">
                        <h4 className="login_title py-3 mt-5">Login With</h4>
                        <button onClick={handleGoogleSignIn} className="button login_btn">Continue with Google</button>
                        <p className="login_text py-3 mb-5">Don't have an account? <NavLink to="/signup">Create an account</NavLink></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;