import React, { useState } from 'react';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', description: 'Post on LinkedIn', mandatory: true },
    { name: 'Email', description: 'Send an email', mandatory: false },
    { name: 'Phone Call', description: 'Make a phone call', mandatory: false },
  ]);

  return (
    <div>
      <h2 className="text-2xl mb-4">Manage Communication Methods</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Mandatory</th>
          </tr>
        </thead>
        <tbody>
          {methods.map((method, index) => (
            <tr key={index}>
              <td>{method.name}</td>
              <td>{method.description}</td>
              <td>{method.mandatory ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunicationMethodManagement;