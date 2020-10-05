import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import VolunteerList from '../VolunteerList/VolunteerList';

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 col-lg-3 col-md-3">
                        <AdminNavbar />
                    </div>
                    <div className="col-11 col-lg-9 col-md-9">
                        <VolunteerList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;