import React, { useState } from 'react';

const CommunicationModal = ({ company, onClose }) => {
  const [communicationType, setCommunicationType] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    console.log(`Logging communication: ${communicationType}, Date: ${date}, Notes: ${notes}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-2xl mb-4">Log Communication for {company.name}</h3>
        <input
          type="text"
          placeholder="Type of Communication"
          value={communicationType}
          onChange={(e) => setCommunicationType(e.target.value)}
          className="mb-4 p-2 w-full border"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-4 p-2 w-full border"
        />
        <textarea
          placeholder="Add notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mb-4 p-2 w-full border"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 mr-2">
          Submit
        </button>
        <button onClick={onClose} className="bg-gray-500 text-white p-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default CommunicationModal;