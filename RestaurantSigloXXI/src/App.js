import React, { useState } from 'react';
import LayoutNavbar from './components/LayoutNavbar';
import AuthLoginForm from './components/AuthLoginForm';
import OrdersSection from './components/OrdersSection';
import KitchenSection from './components/KitchenSection';
import InventorySection from './components/InventorySection';
import StaffSection from './components/StaffSection';
import ReportsSection from './components/ReportsSection';
import LayoutFooter from './components/LayoutFooter';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {isAuthenticated ? (
        <>
          <LayoutNavbar onLogout={handleLogout} />
          <main className="flex-grow">
            <OrdersSection />
            <KitchenSection />
            <InventorySection />
            <StaffSection />
            <ReportsSection />
          </main>
          <LayoutFooter />
        </>
      ) : (
        <AuthLoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;