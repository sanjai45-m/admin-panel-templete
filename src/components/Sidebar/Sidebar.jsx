import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiHome, FiBox, FiUsers, FiShoppingCart, FiSettings, 
  FiDollarSign, FiFileText, FiCreditCard, FiTrendingUp,
  FiStar, FiTool, FiImage, FiZap, FiChevronLeft
} from 'react-icons/fi';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { path: '/', icon: <FiHome />, label: 'Dashboard' },
    { path: '/products', icon: <FiBox />, label: 'Products' },
    { path: '/customers', icon: <FiUsers />, label: 'Customers' },
    { path: '/orders', icon: <FiShoppingCart />, label: 'Orders' },
    { path: '/payouts', icon: <FiDollarSign />, label: 'Payouts' },
    { path: '/reports', icon: <FiFileText />, label: 'Reports' },
    { path: '/payments', icon: <FiCreditCard />, label: 'Payments' },
    { path: '/earnings', icon: <FiTrendingUp />, label: 'Earnings' },
    { path: '/subscriptions', icon: <FiStar />, label: 'Subscriptions' },
    { path: '/operations', icon: <FiTool />, label: 'Operations' },
    { path: '/banners', icon: <FiImage />, label: 'Banners' },
    { path: '/flash-sales', icon: <FiZap />, label: 'Flash Sales' },
    { path: '/settings', icon: <FiSettings />, label: 'Settings' },
  ];

  return (
    <div 
      className={`bg-gray-800 text-white min-h-screen p-4 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className={`font-bold transition-all duration-300 ${
          isCollapsed ? 'scale-0 w-0' : 'text-2xl w-auto'
        }`}>
          Admin
        </h1>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <FiChevronLeft className={`transform transition-transform duration-300 ${
            isCollapsed ? 'rotate-180' : ''
          }`} />
        </button>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-lg transition-all duration-200 overflow-hidden ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-300 hover:bg-gray-700 hover:transform hover:scale-105'
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className={`whitespace-nowrap transition-all duration-300 ${
              isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
            }`}>
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;