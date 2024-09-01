
'use client';
import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img src="https://placehold.co/400" alt="User" className="profile-pic"/>
      <div className="user-info">
        <h4>Shubham Kumar</h4>
        <p>ershubhamkumar80@gmail.com</p>
        <div className="profile-completion">
          <div className="completion-bar" style={{ width: '44%' }}></div>
          <span>44%</span>
        </div>
        <button className="update-profile">Update Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
