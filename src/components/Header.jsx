import React, { useState } from 'react';
import { FiBell, FiUser } from 'react-icons/fi';
import ProfileModal from './modals/ProfileModal';
import NotificationPanel from './Notifications/NotificationPanel';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [userData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Administrator',
    phone: '+1 234-567-8900',
    avatar: 'https://via.placeholder.com/100'
  });

  const handleUpdateProfile = (updatedData) => {
    console.log('Profile updated:', updatedData);
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-700">Welcome back, {userData.name}</div>
        <div className="flex items-center gap-4">
          <button 
            className="p-2 hover:bg-gray-100 rounded-full relative"
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          >
            <FiBell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button 
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsProfileOpen(true)}
          >
            <img 
              src={userData.avatar} 
              alt="Profile" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-700">Profile</span>
          </button>
        </div>
      </div>

      <NotificationPanel 
        isOpen={isNotificationsOpen} 
        onClose={() => setIsNotificationsOpen(false)} 
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        userData={userData}
        onUpdate={handleUpdateProfile}
      />
    </header>
  );
};

export default Header;