const StaffManager = () => {
  const [staff, setStaff] = useState([]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Personal</h2>
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Nombre</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Rol</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Turno</th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4"><span className="sr-only">Editar</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {/* Filas de personal */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StaffManager;