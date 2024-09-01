
'use client';
import React from 'react';
import FilterItem from './FilterItem';
import './Filters.css';
import { UserSearch , MapPin, User, BriefcaseBusiness, Wallet, Building2 } from 'lucide-react';

const Filters = () => {
  return (
    <div className="filters">
      <FilterItem title="Roles" icon={<UserSearch size={20}/>}>
        <select className="filter-select">
          <option value="Role1">Full Stack</option>
          <option value="Role2">Frontend</option>
          <option value="Role3">Backend</option>
        </select>
      </FilterItem>

      <FilterItem title="Location" icon={<MapPin  size={20}/>}>
        <input type="text" placeholder="Location" className="filter-input" />
      </FilterItem>

      <FilterItem title="Number Of Employees" icon={<User size={20} />}>
        <select className="filter-select">
          <option value="1-10">1-10</option>
          <option value="20-30">20-30</option>
          <option value="30-40">30-40</option>
          <option value="40+">40+</option>

        </select>
      </FilterItem>

      <FilterItem title="Experience" icon={<BriefcaseBusiness  size={20}/>}>
        <select className="filter-select">
          <option value="0-1">0-1</option>
          <option value="1-2">1-2</option>
          <option value="2-3">2-3</option>
          <option value="3+">3+</option>

        </select>
      </FilterItem>

      <FilterItem title="Minimum Base Pay Salary" icon={<Wallet size={20}/>}>
        <select className="filter-select">
          <option value="<10L>">&lt;10L</option>
          <option value="10-20">10L-20L</option>
          <option value="20-50">20L-50L</option>
          <option value="50+">50L+</option>

        </select>
      </FilterItem>

      <FilterItem title="Search Company Name"  icon={<Building2  size={20}/>}>
        <input type="text" placeholder="Search Company Name" className="filter-input" />
      </FilterItem>
    </div>
  );
};

export default Filters;
