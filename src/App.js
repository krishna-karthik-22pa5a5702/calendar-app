import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyManagement from './components/Admin/CompanyManagement';
import CommunicationMethodManagement from './components/Admin/CommunicationMethodManagement';
import Dashboard from './components/User/Dashboard';
import CalendarView from './components/User/CalendarView';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/admin/companies" element={<CompanyManagement />} />
          <Route path="/admin/communications" element={<CommunicationMethodManagement />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/calendar" element={<CalendarView />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;