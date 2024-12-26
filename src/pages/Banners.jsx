import React, { useState } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';
import AddBannerModal from '../components/modals/AddBannerModal';

const Banners = () => {
  const [banners, setBanners] = useState([
    {
      id: 1,
      title: 'Summer Sale',
      image: 'https://via.placeholder.com/800x300',
      status: 'Active',
      startDate: '2024-03-15',
      endDate: '2024-04-15',
    },
    {
      id: 2,
      title: 'New Collection',
      image: 'https://via.placeholder.com/800x300',
      status: 'Scheduled',
      startDate: '2024-04-01',
      endDate: '2024-04-30',
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddBanner = (newBanner) => {
    setBanners([...banners, newBanner]);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this banner?')) {
      setBanners(banners.filter(banner => banner.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Banner Management</h1>
          <p className="text-gray-500 mt-1">Create and manage promotional banners</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FiPlus /> Add Banner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="relative">
              <img 
                src={banner.image} 
                alt={banner.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h2 className="text-lg font-semibold">{banner.title}</h2>
                  <p className="text-sm opacity-75">
                    {banner.startDate} - {banner.endDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  banner.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {banner.status}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <FiEye />
                  </button>
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <FiEdit2 />
                  </button>
                  <button 
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    onClick={() => handleDelete(banner.id)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddBannerModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddBanner}
      />
    </div>
  );
};

export default Banners;