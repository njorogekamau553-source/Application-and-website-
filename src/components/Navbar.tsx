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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-xl shadow-pink-50/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="w-10 h-10 bg-[#FF7A59] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#2D2D2D]">Toriah's Finest</span>
            <span className="text-[10px] font-bold text-[#FF7A59] uppercase tracking-widest leading-none">Fresh & Coastal</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2 bg-white/50 p-1.5 rounded-full border border-white shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                location.pathname === link.path 
                  ? 'text-[#FF7A59] bg-[#FFF9F5] shadow-sm' 
                  : 'text-[#6D6D6D] hover:text-[#FF7A59] hover:bg-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-2 pl-2 border-l border-[#F0EBE6]">
            <button
              onClick={() => setIsOrderOpen(true)}
              className="bg-[#FF7A59] text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-[#ff6a42] transition-all shadow-lg shadow-orange-100 transform active:scale-95"
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-[#F0EBE6] text-[#2D2D2D]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b-4 border-[#FFF9F5] overflow-hidden shadow-2xl"
          >
            <div className="px-6 pt-4 pb-10 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 text-xl font-bold rounded-3xl transition-all ${
                    location.pathname === link.path ? 'text-[#FF7A59] bg-[#FFF9F5]' : 'text-[#2D2D2D]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsOrderOpen(true);
                  }}
                  className="w-full bg-[#FF7A59] text-white px-8 py-5 rounded-[2rem] text-center font-bold text-lg shadow-xl shadow-orange-100 transition-all active:scale-95"
                >
                  Order Now 🍹
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
