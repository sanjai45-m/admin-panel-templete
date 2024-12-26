import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import TableHeader from '../components/tables/TableHeader';

const Payments = () => {
  const [payments] = useState([
    { id: 'PAY001', customer: 'John Doe', amount: 299.99, method: 'Credit Card', status: 'Successful', date: '2024-03-15' },
    { id: 'PAY002', customer: 'Jane Smith', amount: 149.50, method: 'PayPal', status: 'Pending', date: '2024-03-14' },
    { id: 'PAY003', customer: 'Bob Johnson', amount: 89.99, method: 'Debit Card', status: 'Failed', date: '2024-03-13' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Successful': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const columns = ['Payment ID', 'Customer', 'Amount', 'Method', 'Status', 'Date'];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payments</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search payments..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 mb-2">Total Payments</h3>
          <p className="text-2xl font-semibold">$12,345.67</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 mb-2">Successful Payments</h3>
          <p className="text-2xl font-semibold text-green-600">85%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 mb-2">Failed Payments</h3>
          <p className="text-2xl font-semibold text-red-600">15%</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <TableHeader columns={columns} />
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4">{payment.id}</td>
                  <td className="px-6 py-4">{payment.customer}</td>
                  <td className="px-6 py-4">${payment.amount}</td>
                  <td className="px-6 py-4">{payment.method}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;