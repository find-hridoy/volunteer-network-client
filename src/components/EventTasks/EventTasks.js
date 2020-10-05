import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import TaskHeader from '../TaskHeader/TaskHeader';

const EventTasks = () => {
    //Use Context
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [eventTask, setEventTask] = useState([]);
    useEffect(() => {
        fetch(`https://agile-badlands-83268.herokuapp.com/getRegisterEvents?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setEventTask(data))
    }, []);

    const handleDelete = (id) => {
        fetch(`https://agile-badlands-83268.herokuapp.com/deleteRegisterEvents/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {

                }
            })
    }
    return (
        <div className="eventTasks_page">
            <TaskHeader />
            <div className="container-fluid mt-5 pt-2">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row g-3">
                            {
                                eventTask.map(etask => <div key={etask._id} className="col-11 col-lg-6 col-md-6 col-sm-10">
                                    <div className="card event_tasks_card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4 col-md-4 col-lg-4 col-sm-8">
                                                    <img className="task_img" src={etask.imgURL} alt="Img" />
                                                </div>
                                                <div className="col-8 col-md-8 col-lg-8 col-sm-8">
                                                    <h5 className="task_text mb-3">{etask.library}</h5>
                                                    <h6 className="task_date mb-4">{(new Date(etask.date).toDateString())}</h6>
                                                    <div>
                                                        <button onClick={() => handleDelete(etask._id)} className=" button cancel_btn">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventTasks;