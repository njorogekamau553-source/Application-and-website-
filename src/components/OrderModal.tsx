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
            className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#FAF9F6] w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl p-8"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            <div className="mb-10 text-center">
              <p className="text-[#FF5C00] font-black uppercase text-[10px] tracking-widest italic mb-3">Place Your Order</p>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none italic">
                Choose <br />Channel.
              </h2>
              {itemName && (
                <p className="mt-4 text-xs font-bold uppercase text-[#1A1A1A]/40">Ordering: {itemName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white border border-[#1A1A1A]/5 rounded-2xl hover:border-[#008148] transition-all group"
              >
                <div className="w-12 h-12 bg-[#008148]/10 rounded-xl flex items-center justify-center text-[#008148] mr-6 group-hover:bg-[#008148] group-hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-left font-black uppercase text-xs tracking-widest">WhatsApp Business</div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="flex flex-col items-center p-6 bg-white border border-[#1A1A1A]/5 rounded-2xl hover:border-[#1A1A1A] transition-all group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-[#1A1A1A] mb-4 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest">Call Now</div>
                </a>
                <a 
                  href={`sms:${phoneNumber}`}
                  className="flex flex-col items-center p-6 bg-white border border-[#1A1A1A]/5 rounded-2xl hover:border-[#FF5C00] transition-all group"
                >
                  <div className="w-10 h-10 bg-orange-100/50 rounded-xl flex items-center justify-center text-[#FF5C00] mb-4 group-hover:bg-[#FF5C00] group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest">Send SMS</div>
                </a>
              </div>

              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white border border-[#1A1A1A]/5 rounded-2xl hover:border-[#E1306C] transition-all group"
              >
                <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-[#E1306C] mr-6 group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="text-left font-black uppercase text-xs tracking-widest">Instagram DM</div>
              </a>
            </div>
            
            <p className="mt-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Available daily 8:00 am — 5:00 pm
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
