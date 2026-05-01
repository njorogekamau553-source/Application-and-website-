import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Phone, MessageSquare, Instagram } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName?: string;
}

export default function OrderModal({ isOpen, onClose, itemName }: OrderModalProps) {
  const phoneNumber = '+254758813003';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(itemName ? `I'd like to order: ${itemName}` : "Hello, I'd like to place an order!")}`;
  const instagramUrl = 'https://instagram.com/toriahsfinesttastes';
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50, rotate: -2 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50, rotate: 2 }}
            className="relative bg-white w-full max-w-md rounded-[3rem] overflow-hidden shadow-3xl shadow-pink-100/50 p-10 border-4 border-[#FFF9F5]"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-3 rounded-full bg-gray-50 hover:bg-pink-50 text-[#6D6D6D] hover:text-pink-500 transition-all transform hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-10 text-center">
              <div className="w-16 h-16 bg-[#FFF9F5] rounded-3xl flex items-center justify-center mx-auto mb-6 transform -rotate-12 border border-[#F5E6DA]">
                <ShoppingBag className="w-8 h-8 text-[#FF7A59]" />
              </div>
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">
                Let's Order!
              </h2>
              <p className="text-[#6D6D6D] font-medium">Pick your favorite way to reach us.</p>
              {itemName && (
                <div className="mt-6 inline-block bg-pink-100/50 border border-pink-100 px-6 py-2 rounded-full text-pink-600 text-sm font-bold">
                  Picking: {itemName} 🍒
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white border-2 border-[#F0EBE6] rounded-[2rem] hover:border-[#34A853] hover:bg-[#F0FDF4] transition-all group"
              >
                <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center text-[#34A853] mr-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-[#2D2D2D] text-lg">WhatsApp</div>
                  <div className="text-sm text-[#6D6D6D] font-medium">Super fast & easy</div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-6">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="flex flex-col items-center p-8 bg-white border-2 border-[#F0EBE6] rounded-[2rem] hover:border-blue-400 hover:bg-blue-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-[#2D2D2D]">Call Us</div>
                </a>
                <a 
                  href={`sms:${phoneNumber}`}
                  className="flex flex-col items-center p-8 bg-white border-2 border-[#F0EBE6] rounded-[2rem] hover:border-[#FF7A59] hover:bg-orange-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF7A59] mb-4 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-[#2D2D2D]">Text Me</div>
                </a>
              </div>

              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white border-2 border-[#F0EBE6] rounded-[2rem] hover:border-[#E1306C] hover:bg-pink-50 transition-all group"
              >
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-[#E1306C] mr-6 group-hover:scale-110 transition-transform">
                  <Instagram className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-[#2D2D2D] text-lg">Instagram DM</div>
                  <div className="text-sm text-[#6D6D6D] font-medium">@toriahsfinesttastes</div>
                </div>
              </a>
            </div>
            
            <div className="mt-10 pt-8 border-t border-[#F0EBE6] flex items-center justify-center text-xs font-bold text-[#6D6D6D] uppercase tracking-widest">
              <Clock className="w-4 h-4 mr-3 text-pink-400" />
              <span>Mon-Sun: 8am — 5pm</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
