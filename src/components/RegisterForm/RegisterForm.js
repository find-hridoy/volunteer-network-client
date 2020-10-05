import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/Group 1329.png';

const RegisterForm = () => {
    //Use Context
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // Find exact data
    const [event, setEvent] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://agile-badlands-83268.herokuapp.com/getEvent`)
            .then(res => res.json())
            .then(data => {
                const getEvent = data.find(e => id === e._id)
                setEvent(getEvent);
            })
    }, [id])

    //Handle Form
    const history = useHistory();
    const { handleSubmit, register, errors } = useForm({
        mode: onchange
    });

    const onSubmit = (values) => {
        fetch('https://agile-badlands-83268.herokuapp.com/addRegisterEvents', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.push('/eventTasks')
                }
            })
            .catch(err => console.log(err))
    };
    return (
        <>
            <div className="register_form d-flex align-items-center justify-content-center flex-column">
                <NavLink className="navbar-brand mb-5" to="/home"> <img className="logo" src={logo} alt="Logo" /> </NavLink>
                <div className="card register_card">
                    <div className="card-body">
                        <h4 className="register_title py-3">Register as a Volunteer</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Full Name */}
                            <input
                                className="register_input"
                                type="text"
                                placeholder="Full Name"
                                defaultValue={loggedInUser.name}
                                name="fullName"
                                ref={register({
                                    required: "Please enter your full name",
                                    pattern: {
                                        value: /[a-zA-Z]+\s[a-zA-Z-]/,
                                        message: "Invalid name"
                                    }
                                })} />
                            <span className="error_text">{errors.fullName && errors.fullName.message}</span> <br />

                            {/* Email */}
                            <input
                                className="register_input"
                                name="email"
                                type="email"
                                placeholder="Username or Email"
                                defaultValue={loggedInUser.email}
                                ref={register({
                                    required: "please enter your email address",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })}
                            />
                            <span className="error_text">{errors.email && errors.email.message}</span> <br />

                            {/* Date */}
                            <input
                                className="register_input"
                                type="date"
                                placeholder="Date"
                                name="date"
                                ref={register({
                                    required: "date is required"
                                })} />
                            <span className="error_text">{errors.date && errors.date.message}</span> <br />

                            {/* Description */}
                            <input
                                className="register_input"
                                type="text"
                                placeholder="Description"
                                name="description"
                                ref={register({
                                    required: "description is required",
                                    pattern: {
                                        value: /[a-zA-Z]+/,
                                        message: "Invalid description"
                                    }
                                })} />
                            <span className="error_text"> {errors.description && errors.description.message}</span> <br />

                            {/* Org. Library */}
                            <input
                                className="register_input"
                                type="text"
                                placeholder="Organize books at the library."
                                name="library"
                                defaultValue={event.title}
                                ref={register({
                                    required: "library is required",
                                    pattern: {
                                        value: /[a-zA-Z]+/,
                                        message: "Invalid library"
                                    }
                                })} />
                            <span className="error_text">{errors.library && errors.library.message}</span> <br />

                            {/* Image Link Send on DB */}
                            <input className="d-none" type="text" name="imgURL" defaultValue={event.img} ref={register} />
                            {/* Button */}
                            <button className="button register_btn w-100 rounded-0 my-4" type="submit">Registration</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;