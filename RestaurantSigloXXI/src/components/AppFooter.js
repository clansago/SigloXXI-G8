const AppFooter = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Contacto</h3>
            <p className="text-gray-300">contacto@restaurante360.com</p>
            <p className="text-gray-300 mt-2">+52 55 1234 5678</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter'].map((network) => (
                <a key={network} href="#" className="text-gray-300 hover:text-yellow-400">
                  {network}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Legal</h3>
            <p className="text-gray-300 text-sm">© 2023 Restaurante360. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default AppFooter;