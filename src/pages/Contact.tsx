import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-[#FFFBF7]">
      <section className="py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
            {/* Contact Info */}
            <div className="md:w-1/2 space-y-16">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100/50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                   Let's Chat
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-[#2D2D2D] tracking-tight leading-none">Get in <span className="text-[#FF7A59]">Touch.</span></h1>
                <p className="text-[#6D6D6D] text-xl leading-relaxed max-w-md">
                  Have a question, some feedback, or just want to chat about your favorite flavor? 
                  We're all ears.
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-white border-2 border-[#F0EBE6] rounded-[1.5rem] flex items-center justify-center text-blue-500 shadow-sm group-hover:border-blue-500 transition-all duration-500 mr-8 shrink-0 transform group-hover:rotate-6">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#6D6D6D] mb-2 uppercase tracking-widest">Call Us</div>
                    <a href="tel:+254758813003" className="text-2xl font-bold text-[#2D2D2D] hover:text-blue-500 transition-colors">+254 758 813 003</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-white border-2 border-[#F0EBE6] rounded-[1.5rem] flex items-center justify-center text-[#34A853] shadow-sm group-hover:border-[#34A853] transition-all duration-500 mr-8 shrink-0 transform group-hover:-rotate-6">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#6D6D6D] mb-2 uppercase tracking-widest">WhatsApp</div>
                    <a href="https://wa.me/254758813003" className="text-2xl font-bold text-[#2D2D2D] hover:text-[#34A853] transition-colors">Chat with our team</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-white border-2 border-[#F0EBE6] rounded-[1.5rem] flex items-center justify-center text-pink-500 shadow-sm group-hover:border-pink-500 transition-all duration-500 mr-8 shrink-0 transform group-hover:rotate-6">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#6D6D6D] mb-2 uppercase tracking-widest">Email Our Table</div>
                    <a href="mailto:toriahsfinest001@gmail.com" className="text-2xl font-bold text-[#2D2D2D] hover:text-pink-500 transition-colors">toriahsfinest001@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-white border-2 border-[#F0EBE6] rounded-[1.5rem] flex items-center justify-center text-orange-500 shadow-sm group-hover:border-orange-500 transition-all duration-500 mr-8 shrink-0 transform group-hover:-rotate-6">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#6D6D6D] mb-2 uppercase tracking-widest">Find Us</div>
                    <div className="text-2xl font-bold text-[#2D2D2D]">Nyali, Mombasa.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Map Placeholder */}
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[3.5rem] space-y-12 shadow-2xl shadow-orange-50/50 border border-[#F0EBE6]"
              >
                <div>
                  <h3 className="text-3xl font-bold text-[#2D2D2D] mb-10 flex items-center">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mr-5">
                      <Clock className="w-6 h-6" />
                    </div>
                    Opening Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-6 border-b-2 border-dashed border-[#F0EBE6]">
                      <span className="text-[#6D6D6D] font-bold text-lg text-pink-500">Every Single Day</span>
                      <span className="text-[#2D2D2D] font-black text-xl bg-[#FFF9F5] px-6 py-2 rounded-full border border-[#FFE4D3]">8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-3xl font-bold text-[#2D2D2D] mb-10">Our Location</h3>
                  <div className="aspect-[16/10] bg-[#FFFBF7] rounded-[2.5rem] flex flex-col items-center justify-center border-4 border-dashed border-[#F0EBE6] text-[#6D6D6D] text-center p-12">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl mb-6">
                      <MapPin className="w-8 h-8 text-[#FF7A59]" />
                    </div>
                    <p className="font-bold text-xl text-[#2D2D2D]">Nyali Area, Mombasa</p>
                    <p className="text-sm mt-4 text-[#6D6D6D] max-w-xs leading-relaxed">We're right in the heart of Nyali. Stop by For a fresh taste of the coast!</p>
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
