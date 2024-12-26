import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiHome, FiBox, FiUsers, FiShoppingCart, FiSettings, 
  FiDollarSign, FiFileText, FiCreditCard, FiTrendingUp,
  FiStar, FiTool, FiImage, FiZap
} from 'react-icons/fi';

const Sidebar = () => {
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
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 overflow-y-auto">
      <div className="text-2xl font-bold mb-8 pl-4">Admin Panel</div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;