import React, { useState } from 'react';
import { FiUsers, FiPackage, FiRefreshCw } from 'react-icons/fi';

const Subscriptions = () => {
  const [subscriptions] = useState([
    {
      id: 1,
      name: 'Basic Plan',
      price: 9.99,
      subscribers: 150,
      features: ['10 Products', 'Basic Analytics', 'Email Support'],
    },
    {
      id: 2,
      name: 'Pro Plan',
      price: 29.99,
      subscribers: 85,
      features: ['Unlimited Products', 'Advanced Analytics', '24/7 Support', 'API Access'],
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 99.99,
      subscribers: 25,
      features: ['Custom Solutions', 'Dedicated Manager', 'Premium Support', 'White Label'],
    },
  ]);

  const stats = [
    { title: 'Total Subscribers', value: '260', icon: <FiUsers /> },
    { title: 'Active Plans', value: '3', icon: <FiPackage /> },
    { title: 'Renewal Rate', value: '85%', icon: <FiRefreshCw /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Subscription Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500">{stat.title}</h3>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptions.map((plan) => (
          <div key={plan.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="text-3xl font-bold mt-2">${plan.price}<span className="text-sm text-gray-500">/month</span></p>
            </div>
            <div className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
            <div className="text-center pt-4 border-t">
              <p className="text-gray-500">Current Subscribers</p>
              <p className="text-2xl font-semibold">{plan.subscribers}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;