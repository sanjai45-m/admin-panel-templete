import React, { useState } from 'react';
import { FiEye, FiEdit } from 'react-icons/fi';
import TableHeader from '../components/tables/TableHeader';
import UpdateOrderStatus from '../components/modals/UpdateOrderStatus';
import OrderTrackingModal from '../components/modals/OrderTrackingModal';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', date: '2024-03-15', status: 'Delivered', total: 1328.99 },
    { id: 2, customer: 'Jane Smith', date: '2024-03-14', status: 'Processing', total: 89.98 },
    { id: 3, customer: 'Bob Johnson', date: '2024-03-13', status: 'Pending', total: 299 },
    { id: 4, customer: 'Alice Brown', date: '2024-03-12', status: 'Shipped', total: 159.99 },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-red-100 text-red-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleUpdateStatus = (newStatus) => {
    setOrders(orders.map(order =>
      order.id === selectedOrder.id ? { ...order, status: newStatus } : order
    ));
  };

  const filteredOrders = filterStatus
    ? orders.filter(order => order.status === filterStatus)
    : orders;

  const columns = ['Order ID', 'Customer', 'Date', 'Status', 'Total', 'Actions'];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <select
          className="px-4 py-2 rounded-lg border border-gray-300"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <TableHeader columns={columns} />
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">${order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedOrder(order);
                          setIsTrackingModalOpen(true);
                        }}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FiEye />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedOrder(order);
                          setIsStatusModalOpen(true);
                        }}
                        className="text-green-600 hover:text-green-800"
                      >
                        <FiEdit />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedOrder && (
        <>
          <UpdateOrderStatus
            isOpen={isStatusModalOpen}
            onClose={() => {
              setIsStatusModalOpen(false);
              setSelectedOrder(null);
            }}
            onUpdate={handleUpdateStatus}
            currentStatus={selectedOrder.status}
          />
          <OrderTrackingModal
            isOpen={isTrackingModalOpen}
            onClose={() => {
              setIsTrackingModalOpen(false);
              setSelectedOrder(null);
            }}
            order={selectedOrder}
          />
        </>
      )}
    </div>
  );
};

export default Orders;