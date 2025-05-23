const OrdersDashboard = () => {
  const [activeOrders, setActiveOrders] = useState([]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Pedidos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-4">Pedidos Activos (4)</h3>
          {/* Lista de pedidos activos */}
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-4">Nuevo Pedido</h3>
          {/* Formulario para nuevo pedido */}
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-4">Historial</h3>
          {/* Filtros y lista de historial */}
        </div>
      </div>
    </div>
  );
};
export default OrdersDashboard;