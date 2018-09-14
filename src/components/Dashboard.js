import React from 'react';
import Patients from './Patients';
import ChatArea from './ChatArea';

const Dashboard = () => (
    <div className="container">
        <h1>Patients</h1>
        <hr />
        <div className="row">
            <Patients/>
            <ChatArea/>
        </div>
    </div>
);

export default Dashboard;