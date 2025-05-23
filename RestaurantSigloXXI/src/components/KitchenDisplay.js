const KitchenDisplay = () => {
  const [ordersInProgress, setOrdersInProgress] = useState([]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Panel de Cocina</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {['recibido', 'preparando', 'listo', 'entregado'].map((status) => (
          <div key={status} className="border rounded-lg p-3">
            <h3 className="text-lg font-medium capitalize mb-3">{status}</h3>
            {/* Items de pedido según estado */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default KitchenDisplay;