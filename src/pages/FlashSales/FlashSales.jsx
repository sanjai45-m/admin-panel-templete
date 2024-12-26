import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import FlashSaleCard from './FlashSaleCard';

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
      target: 200,
    },
    {
      id: 2,
      title: 'Weekend Special',
      discount: '30%',
      status: 'Upcoming',
      timeLeft: '12:00:00',
      products: 8,
      sales: 0,
      target: 100,
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
        <div>
          <h1 className="text-2xl font-bold">Flash Sales</h1>
          <p className="text-gray-500 mt-1">Manage your time-limited promotions</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105">
          <FiPlus /> Create Flash Sale
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashSales.map((sale) => (
          <FlashSaleCard
            key={sale.id}
            sale={sale}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashSales;