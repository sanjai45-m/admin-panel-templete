import React from 'react';
import { FiX, FiPackage, FiTruck, FiCheck } from 'react-icons/fi';

const OrderTrackingModal = ({ isOpen, onClose, order }) => {
  if (!isOpen) return null;

  const trackingSteps = [
    { status: 'Pending', icon: FiPackage, date: order.date },
    { status: 'Processing', icon: FiPackage, date: '2024-03-16' },
    { status: 'Shipped', icon: FiTruck, date: '2024-03-17' },
    { status: 'Delivered', icon: FiCheck, date: '2024-03-18' }
  ];

  const currentStep = trackingSteps.findIndex(step => step.status === order.status);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Order Tracking - #{order.id}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-5 w-full h-0.5 bg-gray-200">
            <div 
              className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${(currentStep / (trackingSteps.length - 1)) * 100}%` }}
            />
          </div>
          
          <div className="relative flex justify-between">
            {trackingSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = index <= currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <div key={step.status} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  } ${isCurrent ? 'ring-4 ring-blue-100' : ''}`}>
                    <StepIcon size={20} />
                  </div>
                  <p className="mt-2 font-medium text-sm">{step.status}</p>
                  <p className="text-xs text-gray-500">{step.date}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-2">Order Details</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><span className="font-medium">Customer:</span> {order.customer}</p>
            <p><span className="font-medium">Total:</span> ${order.total}</p>
            <p><span className="font-medium">Status:</span> {order.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingModal;