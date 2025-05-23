import React, { useState } from 'react';

const KitchenSection = () => {
  const [orders, setOrders] = useState([
    { id: 1, table: 3, items: ['Tacos al pastor x2', 'Agua mineral'], status: 'pending', time: '12:30 PM' },
    { id: 2, table: 5, items: ['Enchiladas x1', 'Refresco'], status: 'in-progress', time: '12:45 PM' }
  ]);
  const [filter, setFilter] = useState('pending');

  const filteredOrders = orders.filter(order => 
    filter === 'pending' ? order.status === 'pending' :
    filter === 'in-progress' ? order.status === 'in-progress' :
    order.status === 'completed'
  );

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? {...order, status: newStatus} : order
    ));
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Área de</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Cocina
          </p>
        </div>

        <div className="mt-10">
          <div className="flex space-x-4 mb-6">
            {['pending', 'in-progress', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  filter === status 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                {status === 'pending' ? 'Pendientes' : 
                 status === 'in-progress' ? 'En Progreso' : 'Completados'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredOrders.map(order => (
              <div key={order.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">Orden #{order.id}</h3>
                    <p className="text-sm text-gray-500">Mesa {order.table} - {order.time}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {order.status === 'pending' ? 'Pendiente' : 
                     order.status === 'in-progress' ? 'En Progreso' : 'Completado'}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex space-x-2">
                  {order.status !== 'completed' && (
                    <button 
                      onClick={() => updateOrderStatus(order.id, 
                        order.status === 'pending' ? 'in-progress' : 'completed')}
                      className={`px-3 py-1 text-sm rounded-md ${
                        order.status === 'pending' 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      {order.status === 'pending' ? 'Comenzar' : 'Completar'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenSection;

// DONE