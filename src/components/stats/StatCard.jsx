import React from 'react';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className={`${color} p-3 rounded-full text-white`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;