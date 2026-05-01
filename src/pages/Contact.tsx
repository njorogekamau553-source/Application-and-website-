import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-[#FAF9F6]">
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
            {/* Contact Info */}
            <div className="md:w-6/12 space-y-16">
              <div>
                <p className="text-[#FF5C00] font-black uppercase text-xs tracking-widest italic mb-6">Say Hello</p>
                <h1 className="text-6xl md:text-[110px] font-black mb-10 text-[#1A1A1A] tracking-tighter italic leading-[0.85] uppercase">Get in <br />Touch.</h1>
                <p className="text-[#1A1A1A]/70 text-lg font-medium leading-relaxed max-w-md">
                  Have a question, some feedback, or just want to chat about your favourite dessert? 
                  We're all ears.
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-white border border-[#1A1A1A]/10 rounded-[1.5rem] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-300 mr-8 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-2">Call Us</div>
                    <a href="tel:+254758813003" className="text-xl font-black text-[#1A1A1A] hover:text-[#FF5C00] transition-colors tracking-tight">+254 758 813 003</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-white border border-[#1A1A1A]/10 rounded-[1.5rem] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#008148] group-hover:text-white transition-all duration-300 mr-8 shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-2">WhatsApp</div>
                    <a href="https://wa.me/254758813003" className="text-xl font-black text-[#1A1A1A] hover:text-[#008148] transition-colors tracking-tight">Chat with our team</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-white border border-[#1A1A1A]/10 rounded-[1.5rem] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-300 mr-8 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-2">Location</div>
                    <div className="text-xl font-black text-[#1A1A1A] leading-[1.1] tracking-tight">Nyali, Mombasa.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Map Placeholder */}
            <div className="md:w-6/12">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#1A1A1A] p-16 rounded-[4rem] text-white space-y-16 shadow-2xl relative overflow-hidden"
              >
                <div className="relative z-10">
                  <p className="text-[#FF5C00] font-black uppercase text-[10px] tracking-widest italic mb-6">Visit Us Daily</p>
                  <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-10">Opening.</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between pb-4 border-b border-white/5">
                      <span className="font-bold text-gray-400 uppercase text-[10px] tracking-widest">Monday — Sunday</span>
                      <span className="font-black text-sm uppercase">8AM - 5PM</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-8">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8">Location.</h3>
                  <div className="aspect-square bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10 text-gray-500 text-[10px] uppercase font-black tracking-widest italic text-center px-12">
                    [ Map View ]
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
