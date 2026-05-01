import { motion } from 'motion/react';
import { Heart, Sun, MapPin, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-[#FAF9F6]">
      {/* Brand Story */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80" 
              alt="Story" 
              className="rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF5C00]/20 rounded-full blur-3xl -z-10"></div>
          </div>
          <div className="md:w-1/2">
            <p className="text-[#FF5C00] font-black uppercase text-xs tracking-widest italic mb-6">Our Legacy</p>
            <h1 className="text-6xl md:text-[100px] font-black uppercase italic tracking-tighter leading-[0.85] mb-8 text-[#1A1A1A]">Fine <br />Tastes.</h1>
            <p className="text-[#1A1A1A]/70 text-lg font-medium leading-relaxed mb-6">
              Toriah's Finest Tastes didn't start in a boardroom. It started in a coastal kitchen, 
              fuelled by the morning sun and the incredible variety of fruits that Mombasa 
              blesses us with every season.
            </p>
            <p className="text-[#1A1A1A] text-xl italic font-bold mb-10 leading-tight">
              "We believe every bite should be a masterclass in coastal flavour."
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div className="border-t-4 border-[#FF5C00] pt-6">
                <div className="text-4xl font-black text-[#1A1A1A] mb-2">2018</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/50">Founded</div>
              </div>
              <div className="border-t-4 border-[#008148] pt-6">
                <div className="text-4xl font-black text-[#1A1A1A] mb-2">15k+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/50">Happy Guests</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#1A1A1A] py-32 px-4 md:px-12 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <motion.div 
             whileInView={{ y: 0, opacity: 1 }}
             initial={{ y: 30, opacity: 0 }}
             viewport={{ once: true }}
             className="bg-white/5 p-16 rounded-[3rem] border border-white/10"
          >
            <div className="w-12 h-12 bg-[#FF5C00] rounded-full mb-8"></div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8 text-[#FF5C00]">Mission.</h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              To inspire the coast through exceptionally fresh, healthy flavours and meticulously 
              crafted treats that make everyday moments feel extraordinary.
            </p>
          </motion.div>
          <motion.div 
             whileInView={{ y: 0, opacity: 1 }}
             initial={{ y: 30, opacity: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-white/5 p-16 rounded-[3rem] border border-white/10"
          >
            <div className="w-12 h-12 bg-[#008148] rounded-full mb-8"></div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8 text-[#008148]">Vision.</h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              To become East Africa's most cherished dessert and juice lounge, 
              known for our coastal heritage, innovative recipes, and unwavering 
              commitment to quality.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5C00]/10 blur-[120px] rounded-full -z-0"></div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-orange-600">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl">Community First</h3>
              <p className="text-gray-500 text-sm">We source our fruits from local farmers, supporting the Mombasa economy.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl">Pure & Natural</h3>
              <p className="text-gray-500 text-sm">No artificial additives or preservatives. Just pure, unadulterated coastal goodness.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl">Authentically Coastal</h3>
              <p className="text-gray-500 text-sm">Every recipe is developed to reflect the unique spirit and flavours of the 254.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
