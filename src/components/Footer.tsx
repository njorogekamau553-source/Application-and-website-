import { Instagram, Facebook, Twitter, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF5C00] rounded-full"></div>
            <span className="text-2xl font-black uppercase tracking-tighter italic">T.F.T.</span>
          </div>
          <p className="text-gray-400 text-sm font-medium leading-relaxed">
            Mombasa's premier destination for fresh juices and gourmet desserts. 
            Experience Toriah's Finest Tastes.
          </p>
          <div className="flex space-x-6">
            <a href="https://instagram.com/toriahsfinesttastes" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5C00] transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://tiktok.com/@toriahsfinesttastes" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5C00] transition-colors">
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.46-2.11-2.43-.02 2.11-.01 4.21-.01 6.31-.01 1.59-.16 3.24-.8 4.7-.76 1.83-2.31 3.42-4.14 4.04-1.6.56-3.32.74-4.99.45-2.22-.38-4.32-1.89-5.41-3.87-.97-1.74-1.21-3.83-.69-5.78.68-2.48 2.6-4.59 5.03-5.26 1.15-.31 2.37-.36 3.55-.17.02 1.5.01 3 .01 4.5-.66-.19-1.39-.23-2.06-.06-1.12.29-2.05 1.13-2.47 2.16-.48 1.14-.3 2.51.48 3.53.84 1.12 2.27 1.63 3.61 1.34 1.25-.26 2.29-1.25 2.62-2.46.19-.74.22-1.51.22-2.27V.02z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-[#FF5C00] italic">Explore</h4>
          <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
            <li><Link to="/menu" className="hover:text-[#FF5C00] transition-colors">Digital Menu</Link></li>
            <li><Link to="/about" className="hover:text-[#FF5C00] transition-colors">Our Story</Link></li>
            <li><Link to="/blog" className="hover:text-[#FF5C00] transition-colors">The Journal</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF5C00] transition-colors">Find Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-[#008148] italic">Visit Us</h4>
          <ul className="space-y-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 mr-4 text-[#008148] shrink-0" />
              <span>Nyali, Mombasa, Kenya</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-4 text-[#008148] shrink-0" />
              <span>+254 758 813 003</span>
            </li>
            <li className="flex items-center">
              <Clock className="w-4 h-4 mr-4 text-[#008148] shrink-0" />
              <span>Daily: 8AM - 5PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 text-white italic">Stay Fresh</h4>
          <p className="text-gray-500 text-[10px] mb-4 uppercase tracking-widest font-bold">toriahsfinest001@gmail.com</p>
          <form className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs focus:ring-1 focus:ring-[#FF5C00] outline-none"
            />
            <button className="bg-[#FF5C00] px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-colors">
              Join Us
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-24 pt-12 border-t border-white/5 text-center text-gray-600 text-[10px] font-black uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Toriah's Finest Tastes. Nyali, Mombasa.
      </div>
    </footer>
  );
}
