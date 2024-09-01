'use client';
import React, {useState } from 'react';
import UserProfile from './UserProfile'; // Import the UserProfile component

import './Sidebar.css';
import { Menu  } from 'lucide-react';

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState('Search Jobs'); // Default selected item
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const handleItemClick = (item:any) => {
      setSelectedItem(item);
    };
  return (
  
    <div className="d-flex">
    <div className={`sidebar bg-light ${isOpen ? 'open' : ''}`}>
      <div className="menu-content p-3">
        <h2 className="title">
          <span className="highlight">Smart Match.</span>
        </h2>
        <div className="menu">
          <h3 className="menu-title">Jobs</h3>
          <ul className="menu-list">
          <li
              className={`menu-item ${selectedItem === 'Applied Jobs' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Applied Jobs')}
            >
              Applied Jobs
            </li>
            <li
              className={`menu-item ${selectedItem === 'Search Jobs' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Search Jobs')}
            >
              Search Jobs
            </li>
            <li
              className={`menu-item ${selectedItem === 'Search Salary' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Search Salary')}
            >
              Search Salary
            </li>
            <li
              className={`menu-item ${selectedItem === 'Ask for Referral' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Ask for Referral')}
            >
              Ask for Referral
            </li>
          </ul>
        </div>
      </div>
      <UserProfile /> {/* Move the user profile component to the bottom */}
      </div>
      <div className="hamburger-container ms-auto p-3">
        <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
          <span><Menu color="black"/></span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
