'use client';
import React,{ ReactNode , useState } from 'react';
import './FilterItem.css';

interface FiltersProps {
  title: string;
  children: ReactNode;
  icon:ReactNode 
}


const FilterItem:React.FC<FiltersProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-item">
      <div className="filter-header" onClick={toggleOpen}>
        <div className="filter-title">
          <span className="filter-icon">{icon}</span>
          <span>{title}</span>
        </div>
        <span className={`filter-toggle ${isOpen ? 'open' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </div>
      {isOpen && <div className="filter-content">{children}</div>}
    </div>
  );
};

export default FilterItem;
