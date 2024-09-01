
'use client';
import React from 'react';
import Sidebar from '../pages/screens/components/Sidebar';
import Filters from '../pages/screens/components/Filters';
import JobList from '../pages/screens/components/JobList';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Jobs: React.FC = () => {

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        
      <div className="row">
      <div className="col-lg-2 col-md-3 col-sm-4">
          <Filters />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-8">
          <JobList />
          </div>
        </div>
    </div>
      </div>
  );
};

export default Jobs;
