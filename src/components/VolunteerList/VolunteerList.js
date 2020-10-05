import React, { useEffect, useState } from 'react';

const VolunteerList = () => {
    //Use Context
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [volunteerList, setVolunteerList] = useState([]);
    useEffect(() => {
        fetch('https://agile-badlands-83268.herokuapp.com/allRegisterEvents')
            .then(res => res.json())
            .then(data => setVolunteerList(data))
    }, []);

    const handleDelete = (id) => {
        fetch(`https://agile-badlands-83268.herokuapp.com/deleteDashboardEvents/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {

                }
            })
    }
    return (
        <div className="py-3">
            <h3 className="volunteer_text py-3">Volunteer register list</h3>
            <div className="volunteer_bg p-4">
                <div className="card volunteer_card">
                    <div className="card-body">
                        <table className="table table-borderless">
                            <thead className="t_head">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Register Date</th>
                                    <th scope="col">Volunteer List</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    volunteerList.map(vL => <tr>
                                        <td className="t_data">{vL.fullName}</td>
                                        <td className="t_data">{vL.email}</td>
                                        <td className="t_data">{vL.date}</td>
                                        <td className="t_data">{vL.library}</td>
                                        <td><button className="button" onClick={() => handleDelete(vL._id)}>Delete</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerList;