import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';
import { MessageCircle } from 'lucide-react';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Cart />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8801234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-current" />
      </a>
    </div>
  );
};

export default Layout;
