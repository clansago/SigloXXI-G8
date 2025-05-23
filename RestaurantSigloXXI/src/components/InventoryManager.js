const InventoryManager = () => {
  const [inventory, setInventory] = useState([]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Administrar Inventario</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="relative rounded-md shadow-sm w-64">
          <input
            type="text"
            className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Buscar artículo..."
          />
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
          + Añadir Item
        </button>
      </div>
      {/* Tabla de inventario */}
    </div>
  );
};
export default InventoryManager;