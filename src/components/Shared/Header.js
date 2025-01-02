import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <Link to="/user/dashboard" className="mr-4">Dashboard</Link>
        <Link to="/user/calendar" className="mr-4">Calendar</Link>
        <Link to="/admin/companies" className="mr-4">Manage Companies</Link>
        <Link to="/admin/communications" className="mr-4">Manage Communication Methods</Link>
      </nav>
    </header>
  );
};

export default Header;