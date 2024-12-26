import React, { useState } from 'react';
import { FiDownload, FiFilter } from 'react-icons/fi';
import TableHeader from '../components/tables/TableHeader';

const Payouts = () => {
  const [payouts] = useState([
    { id: 1, seller: 'John Store', amount: 1500, status: 'Completed', date: '2024-03-15' },
    { id: 2, seller: 'Tech Hub', amount: 2300, status: 'Pending', date: '2024-03-14' },
    { id: 3, seller: 'Fashion Store', amount: 890, status: 'Processing', date: '2024-03-13' },
  ]);

  const columns = ['ID', 'Seller', 'Amount', 'Status', 'Date'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payouts</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
            <FiDownload /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
            <FiFilter /> Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <TableHeader columns={columns} />
            <tbody className="divide-y divide-gray-200">
              {payouts.map((payout) => (
                <tr key={payout.id}>
                  <td className="px-6 py-4">#{payout.id}</td>
                  <td className="px-6 py-4">{payout.seller}</td>
                  <td className="px-6 py-4">${payout.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(payout.status)}`}>
                      {payout.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{payout.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payouts;