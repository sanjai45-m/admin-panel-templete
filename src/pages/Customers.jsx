import React, { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const Customers = () => {
  const [customers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234-567-8901', orders: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234-567-8902', orders: 3 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234-567-8903', orders: 2 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '+1 234-567-8904', orders: 7 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{customer.name}</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {customer.orders} orders
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <FiMail className="w-4 h-4 mr-2" />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiPhone className="w-4 h-4 mr-2" />
                <span>{customer.phone}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;