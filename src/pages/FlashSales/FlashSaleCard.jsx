import React from 'react';
import { FiClock, FiEdit2, FiTrash2, FiBarChart2 } from 'react-icons/fi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FlashSaleCard = ({ sale, onDelete }) => {
  const progress = (sale.sales / sale.target) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transform transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-semibold">{sale.title}</h2>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          sale.status === 'Active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {sale.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-2">
            <CircularProgressbar
              value={progress}
              text={`${Math.round(progress)}%`}
              styles={buildStyles({
                pathColor: '#4F46E5',
                textColor: '#4F46E5',
                trailColor: '#E5E7EB',
              })}
            />
          </div>
          <p className="text-sm text-gray-500">Sales Progress</p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
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
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-3 rounded-lg text-center">
          <p className="text-2xl font-semibold">{sale.products}</p>
          <p className="text-sm text-gray-500">Products</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg text-center">
          <p className="text-2xl font-semibold">{sale.sales}</p>
          <p className="text-sm text-gray-500">Sales</p>
        </div>
      </div>

      <div className="flex gap-2 pt-4 border-t">
        <button className="flex-1 py-2 px-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
          <FiBarChart2 className="inline mr-2" /> Analytics
        </button>
        <button className="flex-1 py-2 px-4 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
          <FiEdit2 className="inline mr-2" /> Edit
        </button>
        <button 
          className="flex-1 py-2 px-4 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
          onClick={() => onDelete(sale.id)}
        >
          <FiTrash2 className="inline mr-2" /> Delete
        </button>
      </div>
    </div>
  );
};

export default FlashSaleCard;