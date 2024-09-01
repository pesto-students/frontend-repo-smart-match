
'use client';
import React from 'react';
import './JobList.css';

const JobList = () => {
  return (
    <div className="job-list">
      <h4 className='search-jobs'><u >Search Jobs</u> <span className='notification'>8763</span> </h4>
      <div className="job-card">
        <div className="job-header">
          <span className="job-title">iOS Developer</span>
          <span className="job-post-date">Posted 22 days ago</span>
        </div>
        <div className="job-company">Plutomen</div>
        <div className="job-description">
          <p>Technical Skill: Previous working experience in Swift, Objective C, and cocoa touch...</p>
          <button className="view-more">view more</button>
        </div>
        <div className="job-tags">
          <span className="tag">backend</span>
          <span className="tag">continuous integration</span>
          <span className="tag">communication skills</span>
          <span className="tag">Git</span>
          <span className="tag">iOS</span>
          <span className="tag">+4</span>
        </div>
        <button className="easy-apply">Easy Apply</button>
      </div>
      <div className="job-card">
        <div className="job-header">
          <span className="job-title">iOS Developer</span>
          <span className="job-post-date">Posted 22 days ago</span>
        </div>
        <div className="job-company">Plutomen</div>
        <div className="job-description">
          <p>Technical Skill: Previous working experience in Swift, Objective C, and cocoa touch...</p>
          <button className="view-more">view more</button>
        </div>
        <div className="job-tags">
          <span className="tag">backend</span>
          <span className="tag">continuous integration</span>
          <span className="tag">communication skills</span>
          <span className="tag">Git</span>
          <span className="tag">iOS</span>
          <span className="tag">+4</span>
        </div>
        <button className="easy-apply">Easy Apply</button>
      </div>
      <div className="job-card">
        <div className="job-header">
          <span className="job-title">iOS Developer</span>
          <span className="job-post-date">Posted 22 days ago</span>
        </div>
        <div className="job-company">Plutomen</div>
        <div className="job-description">
          <p>Technical Skill: Previous working experience in Swift, Objective C, and cocoa touch...</p>
          <button className="view-more">view more</button>
        </div>
        <div className="job-tags">
          <span className="tag">backend</span>
          <span className="tag">continuous integration</span>
          <span className="tag">communication skills</span>
          <span className="tag">Git</span>
          <span className="tag">iOS</span>
          <span className="tag">+4</span>
        </div>
        <button className="easy-apply">Easy Apply</button>
      </div>
      <div className="job-card">
        <div className="job-header">
          <span className="job-title">iOS Developer</span>
          <span className="job-post-date">Posted 22 days ago</span>
        </div>
        <div className="job-company">Plutomen</div>
        <div className="job-description">
          <p>Technical Skill: Previous working experience in Swift, Objective C, and cocoa touch...</p>
          <button className="view-more">view more</button>
        </div>
        <div className="job-tags">
          <span className="tag">backend</span>
          <span className="tag">continuous integration</span>
          <span className="tag">communication skills</span>
          <span className="tag">Git</span>
          <span className="tag">iOS</span>
          <span className="tag">+4</span>
        </div>
        <button className="easy-apply">Easy Apply</button>
      </div>
      {/* Repeat similar structure for other job cards */}
    </div>
  );
};

export default JobList;
