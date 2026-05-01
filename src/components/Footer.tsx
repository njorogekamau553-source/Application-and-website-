import { Instagram, Facebook, Twitter, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#FFFBF7] border-t border-[#F5E6DA] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF7A59] rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold text-[#2D2D2D] tracking-tight">Toriah's Finest</span>
          </div>
          <p className="text-[#6D6D6D] text-sm leading-relaxed">
            Mombasa's sweetheart spot for fresh juices, bubbly smoothies, and homemade treats. 
            Made fresh for you, every single day.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/toriahsfinesttastes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-[#F0EBE6] rounded-full flex items-center justify-center text-[#6D6D6D] hover:text-[#FF7A59] hover:border-[#FF7A59] transition-all"><Instagram className="w-5 h-5" /></a>
            <a href="https://tiktok.com/@toriahsfinesttastes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-[#F0EBE6] rounded-full flex items-center justify-center text-[#6D6D6D] hover:text-[#FF7A59] hover:border-[#FF7A59] transition-all">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#2D2D2D] mb-8 uppercase tracking-widest">Explore</h4>
          <ul className="space-y-4 text-sm font-medium text-[#6D6D6D]">
            <li><Link to="/menu" className="hover:text-[#FF7A59] transition-colors">Sweet Menu</Link></li>
            <li><Link to="/about" className="hover:text-[#FF7A59] transition-colors">Our Story</Link></li>
            <li><Link to="/blog" className="hover:text-[#FF7A59] transition-colors">The Journal</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF7A59] transition-colors">Find Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#2D2D2D] mb-8 uppercase tracking-widest">Visit Us</h4>
          <ul className="space-y-6 text-sm text-[#6D6D6D]">
            <li className="flex items-start">
              <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center text-[#FF7A59] mr-4 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="pt-1">Nyali, Mombasa, Kenya</span>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 mr-4 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span>+254 758 813 003</span>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-500 mr-4 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <span>Daily: 8AM - 5PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#2D2D2D] mb-8 uppercase tracking-widest">Connect</h4>
          <p className="text-[#6D6D6D] text-sm mb-6">Join our fresh newsletter for updates!</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white border-2 border-[#F0EBE6] rounded-2xl px-5 py-3 text-sm focus:border-[#FF7A59] outline-none transition-all"
            />
            <button className="bg-[#FF7A59] text-white px-6 py-3.5 rounded-2xl text-sm font-bold hover:bg-[#ff6a42] transition-colors shadow-lg shadow-orange-100">
              Join Us!
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-20 pt-8 border-t border-[#F5E6DA] flex flex-col md:flex-row justify-between items-center gap-4 text-[#6D6D6D] text-xs font-bold uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Toriah's Finest Tastes. Nyali, Mombasa.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-[#FF7A59]">Privacy</a>
          <a href="#" className="hover:text-[#FF7A59]">Terms</a>
        </div>
      </div>
    </footer>
  );
}
