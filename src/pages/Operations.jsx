import React, { useState } from 'react';
import { FiTool, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

const Operations = () => {
  const [systemStatus] = useState([
    { name: 'Payment Gateway', status: 'Operational', uptime: '99.9%' },
    { name: 'Order Processing', status: 'Operational', uptime: '99.8%' },
    { name: 'Inventory System', status: 'Maintenance', uptime: '95.5%' },
    { name: 'User Authentication', status: 'Operational', uptime: '99.9%' },
  ]);

  const getStatusColor = (status) => {
    return status === 'Operational' ? 'text-green-600' : 'text-yellow-600';
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">System Operations</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500">Overall Status</h3>
              <p className="text-2xl font-semibold text-green-600">Healthy</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FiCheckCircle className="text-green-600 w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500">Active Services</h3>
              <p className="text-2xl font-semibold">4/5</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FiTool className="text-blue-600 w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500">Incidents</h3>
              <p className="text-2xl font-semibold">1</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FiAlertCircle className="text-yellow-600 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            {systemStatus.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{service.name}</h3>
                  <p className="text-sm text-gray-500">Uptime: {service.uptime}</p>
                </div>
                <span className={`font-medium ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations;