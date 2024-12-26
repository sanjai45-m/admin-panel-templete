import React from 'react';
import { FiBell, FiX, FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi';

const NotificationPanel = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      type: 'success',
      message: 'New order received #1234',
      time: '2 minutes ago',
    },
    {
      id: 2,
      type: 'warning',
      message: 'Low stock alert for Product XYZ',
      time: '1 hour ago',
    },
    {
      id: 3,
      type: 'info',
      message: 'System maintenance scheduled',
      time: '2 hours ago',
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <FiCheckCircle className="text-green-500" />;
      case 'warning': return <FiAlertCircle className="text-yellow-500" />;
      case 'info': return <FiInfo className="text-blue-500" />;
      default: return <FiBell className="text-gray-500" />;
    }
  };

  return (
    <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiX />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto h-full pb-20">
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            className="p-4 border-b hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">{getIcon(notification.type)}</div>
              <div>
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;