import React, { useState } from 'react';
import { FiX, FiUpload } from 'react-icons/fi';

const AddBannerModal = ({ isOpen, onClose, onAdd }) => {
  const [banner, setBanner] = useState({
    title: '',
    image: '',
    startDate: '',
    endDate: '',
    status: 'Active'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...banner, id: Date.now() });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Banner</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 p-2"
              value={banner.title}
              onChange={(e) => setBanner({ ...banner, title: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <div className="flex gap-2">
              <input
                type="url"
                className="flex-1 rounded-lg border border-gray-300 p-2"
                value={banner.image}
                onChange={(e) => setBanner({ ...banner, image: e.target.value })}
                required
              />
              <button type="button" className="p-2 bg-gray-100 rounded-lg">
                <FiUpload />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-300 p-2"
                value={banner.startDate}
                onChange={(e) => setBanner({ ...banner, startDate: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-300 p-2"
                value={banner.endDate}
                onChange={(e) => setBanner({ ...banner, endDate: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              className="w-full rounded-lg border border-gray-300 p-2"
              value={banner.status}
              onChange={(e) => setBanner({ ...banner, status: e.target.value })}
            >
              <option value="Active">Active</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Banner
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBannerModal;