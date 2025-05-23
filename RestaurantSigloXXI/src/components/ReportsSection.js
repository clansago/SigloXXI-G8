const ReportsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Análisis y</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Reportes
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Ventas diarias</h3>
              <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Gráfico de ventas</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Platos más vendidos</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tacos al pastor</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                {/* Más items aquí */}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Resumen financiero</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ventas totales</span>
                  <span className="font-medium">$24,580</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gastos</span>
                  <span className="font-medium">$8,230</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <span className="text-gray-900 font-medium">Utilidad</span>
                  <span className="text-indigo-600 font-medium">$16,350</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;