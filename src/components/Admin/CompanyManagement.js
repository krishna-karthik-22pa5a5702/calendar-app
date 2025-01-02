import React, { useState } from 'react';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    location: '',
    linkedin: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: '',
  });

  const handleChange = (e) => {
    setNewCompany({ ...newCompany, [e.target.name]: e.target.value });
  };

  const addCompany = () => {
    setCompanies([...companies, newCompany]);
    setNewCompany({
      name: '',
      location: '',
      linkedin: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      communicationPeriodicity: '',
    });
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Manage Companies</h2>
      <input
        type="text"
        name="name"
        value={newCompany.name}
        onChange={handleChange}
        placeholder="Company Name"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="location"
        value={newCompany.location}
        onChange={handleChange}
        placeholder="Location"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="linkedin"
        value={newCompany.linkedin}
        onChange={handleChange}
        placeholder="LinkedIn Profile"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="emails"
        value={newCompany.emails}
        onChange={handleChange}
        placeholder="Emails"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="phoneNumbers"
        value={newCompany.phoneNumbers}
        onChange={handleChange}
        placeholder="Phone Numbers"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="comments"
        value={newCompany.comments}
        onChange={handleChange}
        placeholder="Comments"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="communicationPeriodicity"
        value={newCompany.communicationPeriodicity}
        onChange={handleChange}
        placeholder="Communication Periodicity (e.g., every 2 weeks)"
        className="mb-2 p-2 border"
      />
      <button onClick={addCompany} className="bg-blue-500 text-white p-2">
        Add Company
      </button>
      <div className="mt-4">
        <h3 className="text-xl">Companies</h3>
        <ul>
          {companies.map((company, index) => (
            <li key={index}>
              {company.name} - {company.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyManagement;