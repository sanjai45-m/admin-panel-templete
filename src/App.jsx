import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Settings from './pages/Settings';
import Payouts from './pages/Payouts';
import Reports from './pages/Reports';
import Payments from './pages/Payments';
import Earnings from './pages/Earnings';
import Subscriptions from './pages/Subscriptions';
import Operations from './pages/Operations';
import Banners from './pages/Banners';
import FlashSales from './pages/FlashSales';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/payouts" element={<Payouts />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/earnings" element={<Earnings />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/operations" element={<Operations />} />
              <Route path="/banners" element={<Banners />} />
              <Route path="/flash-sales" element={<FlashSales />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;