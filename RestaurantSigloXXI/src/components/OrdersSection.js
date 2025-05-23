import React, { useState } from 'react';

const OrdersSection = () => {
  const [orders, setOrders] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Gestión de</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Pedidos en Mesa
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Mesas</h3>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((table) => (
                <button
                  key={table}
                  onClick={() => setSelectedTable(table)}
                  className={`p-4 rounded-lg transition-colors duration-200 ${selectedTable === table ? 'bg-indigo-600 text-white' : 'bg-white hover:bg-gray-100'}`}
                >
                  Mesa {table}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            {selectedTable ? (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Ordenes - Mesa {selectedTable}</h3>
                <div className="space-y-4">
                  {/* Aquí irían las órdenes de la mesa seleccionada */}
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                  Agregar Orden
                </button>
              </div>
            ) : (
              <p className="text-gray-500">Selecciona una mesa para ver sus órdenes</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSection;

// DONE