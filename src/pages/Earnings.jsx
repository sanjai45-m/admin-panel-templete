import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const Earnings = () => {
  const earningsData = [
    { month: 'Jan', earnings: 5000 },
    { month: 'Feb', earnings: 6200 },
    { month: 'Mar', earnings: 7800 },
    { month: 'Apr', earnings: 7200 },
    { month: 'May', earnings: 8900 },
  ];

  const stats = [
    { title: 'Total Earnings', amount: '$45,678', change: '+12.5%', isPositive: true },
    { title: 'Monthly Revenue', amount: '$8,900', change: '+8.2%', isPositive: true },
    { title: 'Weekly Sales', amount: '$2,345', change: '-3.1%', isPositive: false },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Earnings Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 mb-2">{stat.title}</h3>
            <p className="text-2xl font-semibold">{stat.amount}</p>
            <div className={`flex items-center mt-2 ${
              stat.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.isPositive ? <FiArrowUp /> : <FiArrowDown />}
              <span className="ml-1">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Monthly Earnings</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="earnings" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Earnings;