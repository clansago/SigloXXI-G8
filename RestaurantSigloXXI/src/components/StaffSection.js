import React, { useState } from 'react';

const StaffSection = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: 'Juan López', role: 'Mesero', avatar: 'JL' },
    { id: 2, name: 'María García', role: 'Cocinera', avatar: 'MG' },
    { id: 3, name: 'Carlos Martínez', role: 'Administrador', avatar: 'CM' }
  ]);
  const [newEmployee, setNewEmployee] = useState({ name: '', role: 'Mesero' });
  const [showForm, setShowForm] = useState(false);

  const handleAddEmployee = () => {
    if (newEmployee.name.trim() === '') return;
    
    const avatar = newEmployee.name.split(' ').map(n => n[0]).join('');
    setStaff([...staff, {
      id: staff.length + 1,
      name: newEmployee.name,
      role: newEmployee.role,
      avatar
    }]);
    setNewEmployee({ name: '', role: 'Mesero' });
    setShowForm(false);
  };

  const getRoleColor = (role) => {
    switch(role) {
      case 'Mesero': return 'bg-blue-100 text-blue-800';
      case 'Cocinero': return 'bg-green-100 text-green-800';
      case 'Administrador': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Administración de</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Personal
          </p>
        </div>

        <div className="mt-10">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Equipo de trabajo</h3>
              <button 
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                {showForm ? 'Cancelar' : '+ Agregar Empleado'}
              </button>
            </div>

            {showForm && (
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                    <input
                      type="text"
                      value={newEmployee.name}
                      onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Puesto</label>
                    <select
                      value={newEmployee.role}
                      onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option>Mesero</option>
                      <option>Cocinero</option>
                      <option>Administrador</option>
                    </select>
                  </div>

                  <div className="sm:col-span-6 flex justify-end">
                    <button
                      onClick={handleAddEmployee}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
                    >
                      Guardar Empleado
                    </button>
                  </div>
                </div>
              </div>
            )}

            <ul className="divide-y divide-gray-200">
              {staff.map((employee) => (
                <li key={employee.id} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-medium">{employee.avatar}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                      <div className="text-sm text-gray-500">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(employee.role)}`}>
                          {employee.role}
                        </span>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <button className="text-indigo-600 hover:text-indigo-900">Editar</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffSection;

// DONE