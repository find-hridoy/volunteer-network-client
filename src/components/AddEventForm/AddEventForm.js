import React from 'react';
import { useForm } from 'react-hook-form';

const AddEventForm = () => {
    const { handleSubmit, register, errors } = useForm({
        mode: onchange
    });
    const onSubmit = values => {
        fetch('https://agile-badlands-83268.herokuapp.com/addEvent', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data === true) {
                    alert('Event Post Successfully');
                }
            })
            .catch(err => console.log(err))
    };
    return (
        <div className="py-3">
            <h3 className="addEvent_text py-3">Add Event</h3>
            <div className="addEvent_bg p-4">
                <div className="card addEvent_card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="row gy-3">
                            <div className="col-md-6">
                                <label>Event Title</label>
                                <input className="register_input" type="text" placeholder="Event Title" name="title" ref={register({
                                    required: "title is required",
                                    pattern: {
                                        value: /[a-zA-Z]+\s[a-zA-Z-]/,
                                        message: "invalid title"
                                    }
                                })} /> <br />
                                <span className="error_text">{errors.title && errors.title.message}</span>
                            </div>
                            <div className="col-md-6">
                                <label>Event Date</label>
                                <input className="register_input" type="date" placeholder="Event Date" name="date" ref={register({ required: "date is required" })} /> <br />
                                <span className="error_text">{errors.date && errors.date.message}</span>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="description">Event Description</label>
                                <input className="register_input" type="text" placeholder="Description" name="description" ref={register({
                                    required: "description is required",
                                    pattern: {
                                        value: /[a-zA-Z]+/,
                                        message: "invalid description"
                                    }
                                })} /> <br />
                                <span className="error_text">{errors.description && errors.description.message}</span>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="img">Event Image Link</label>
                                <input className="register_input" type="text" placeholder="Image Link" name="img" ref={register({ required: 'image link required' })} /> <br />
                                <span className="error_text">{errors.img && errors.img.message}</span>
                            </div>
                            {/* Button */}
                            <button className="button register_btn w-100 rounded-0 my-4" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEventForm;