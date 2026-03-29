import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Preloader } from './components/UI';
import { Navbar, CartDrawer } from './components/Navbar';
import { ItemModal } from './components/MenuCard';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LocationsPage, CateringPage, AboutPage } from './pages/OtherPages';
import { SEED_MENU } from './data/constants';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuItems] = useState(SEED_MENU);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage navigate={setCurrentPage} menuItems={menuItems} />;
      case 'menu': return <MenuPage navigate={setCurrentPage} />;
      case 'checkout': return <CheckoutPage navigate={setCurrentPage} />;
      case 'locations': return <LocationsPage navigate={setCurrentPage} />;
      case 'catering': return <CateringPage navigate={setCurrentPage} />;
      case 'about': return <AboutPage navigate={setCurrentPage} />;
      case 'contact': return <CateringPage navigate={setCurrentPage} />;
      default: return <HomePage navigate={setCurrentPage} menuItems={menuItems} />;
    }
  };

  return (
    <CartProvider>
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <div className={`bg-grain transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`font-sans text-[#1C1C1C] min-h-screen selection:bg-[#3A4D39] selection:text-[#F2F0E9] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar navigate={setCurrentPage} />
        <ItemModal />
        <CartDrawer navigate={setCurrentPage} />
        <main>{renderPage()}</main>
        <Footer navigate={setCurrentPage} />
      </div>
    </CartProvider>
  );
};

export default App;
