import React, { useState } from 'react';
import { FiClock, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

const FlashSales = () => {
  const [flashSales, setFlashSales] = useState([
    {
      id: 1,
      title: 'Flash Deal - Electronics',
      discount: '50%',
      status: 'Active',
      timeLeft: '2:30:45',
      products: 15,
      sales: 145,
    },
    {
      id: 2,
      title: 'Weekend Special',
      discount: '30%',
      status: 'Upcoming',
      timeLeft: '12:00:00',
      products: 8,
      sales: 0,
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this flash sale?')) {
      setFlashSales(flashSales.filter(sale => sale.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Flash Sales</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
          <FiPlus /> Create Flash Sale
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashSales.map((sale) => (
          <div key={sale.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-semibold">{sale.title}</h2>
              <span className={`px-2 py-1 rounded-full text-xs ${
                sale.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {sale.status}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Discount</span>
                <span className="font-semibold text-green-600">{sale.discount}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Time Left</span>
                <div className="flex items-center text-blue-600">
                  <FiClock className="mr-1" />
                  <span>{sale.timeLeft}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Products</span>
                <span>{sale.products}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Total Sales</span>
                <span>{sale.sales}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t">
              <button className="flex-1 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                <FiEdit2 className="inline mr-1" /> Edit
              </button>
              <button 
                className="flex-1 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                onClick={() => handleDelete(sale.id)}
              >
                <FiTrash2 className="inline mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;