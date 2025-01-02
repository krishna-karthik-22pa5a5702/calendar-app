import React from 'react';

const Dashboard = ({ companies }) => {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Company</th>
            <th>Last Communication</th>
            <th>Next Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.lastCommunication}</td>
              <td>{company.nextCommunication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;