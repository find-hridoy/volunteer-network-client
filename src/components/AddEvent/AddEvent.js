import React from 'react';
import AddEventForm from '../AddEventForm/AddEventForm';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AddEvent = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 col-lg-3 col-md-3">
                        <AdminNavbar />
                    </div>
                    <div className="col-11 col-lg-9 col-md-9">
                        <AddEventForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddEvent;