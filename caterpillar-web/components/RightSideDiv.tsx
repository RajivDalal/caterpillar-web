import React from 'react';
import Calendar from './ui/calendar';

const RightSideDiv: React.FC = () => {
  return (
    <div className="right-side-container h-4/6 w-full bg-white p-2 shadow-md overflow-auto">
      <Calendar />
    </div>
  );
};

export default RightSideDiv;
