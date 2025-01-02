import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Calendar View</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileContent={({ date }) => {
          // Here you can display communications for a specific date
          return <span>📩</span>;
        }}
      />
    </div>
  );
};

export default CalendarView;