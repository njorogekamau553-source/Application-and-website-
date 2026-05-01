import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import OrderModal from './OrderModal';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#1A1A1A]/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#FF5C00] rounded-full flex items-center justify-center">
            <span className="text-white font-black text-xl">T</span>
          </div>
          <span className="text-2xl font-black uppercase tracking-tighter text-[#1A1A1A]">TORIAH'S FINEST</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#FF5C00] ${
                location.pathname === link.path ? 'text-[#FF5C00]' : 'text-[#1A1A1A]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setIsOrderOpen(true)}
            className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            Order Now
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1A1A1A] hover:text-[#FF5C00] p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-[10px] font-black uppercase tracking-[0.2em] ${
                    location.pathname === link.path ? 'text-[#FF5C00] bg-orange-50 rounded-lg' : 'text-[#1A1A1A]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsOrderOpen(true);
                  }}
                  className="w-full bg-[#1A1A1A] text-white px-5 py-4 rounded-xl text-center text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#FF5C00] transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    <OrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
    </>
  );
}
