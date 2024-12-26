import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const salesData = [
    { month: 'Jan', sales: 4000, orders: 240 },
    { month: 'Feb', sales: 3000, orders: 180 },
    { month: 'Mar', sales: 5000, orders: 300 },
    { month: 'Apr', sales: 4500, orders: 270 },
    { month: 'May', sales: 6000, orders: 360 },
  ];

  const reports = [
    { title: 'Sales Report', type: 'Monthly', date: '2024-03' },
    { title: 'Revenue Report', type: 'Quarterly', date: 'Q1 2024' },
    { title: 'Inventory Report', type: 'Weekly', date: 'Week 11' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reports</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
          <FiDownload /> Export All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#4F46E5" />
                <Line type="monotone" dataKey="orders" stroke="#10B981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Available Reports</h2>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{report.title}</h3>
                  <p className="text-sm text-gray-500">{report.type} - {report.date}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  <FiDownload />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;