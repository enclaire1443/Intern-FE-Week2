import React from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div 
      className="page-transition-container" 
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <div key={location.key} className="page-transition-content">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;