import { motion } from 'motion/react';
import { Heart, Sun, MapPin, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-[#FFFBF7]">
      {/* Brand Story */}
      <section className="py-24 px-4 md:px-12 bg-white border-b border-[#F5E6DA]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80" 
              alt="Story" 
              className="rounded-[3rem] shadow-2xl border-4 border-white w-full object-cover aspect-[4/5] transform -rotate-2"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2 space-y-8">
            <div className="inline-block bg-orange-100/50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
               Our Little Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] tracking-tight leading-tight">
              Crafting Coastal <br /><span className="text-[#FF7A59]">Masterpieces.</span>
            </h1>
            <p className="text-[#6D6D6D] text-lg leading-relaxed">
              Toriah's Finest Tastes didn't start in a boardroom. It started in a cozy coastal kitchen, 
              fuelled by the morning sun and the incredible variety of fruits that Mombasa 
              blesses us with every season.
            </p>
            <div className="bg-[#FFF9F5] p-8 rounded-[2rem] border-2 border-white shadow-sm">
              <p className="text-[#2D2D2D] text-xl font-bold italic text-center">
                "We believe every single bite should be a masterclass in coastal flavour."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-[#FF7A59] mb-1">2018</div>
                <div className="text-xs font-bold text-[#6D6D6D] uppercase tracking-widest">Founded</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-[#34A853] mb-1">15k+</div>
                <div className="text-xs font-bold text-[#6D6D6D] uppercase tracking-widest">Happy Hearts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-4 md:px-12 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
             whileInView={{ y: 0, opacity: 1 }}
             initial={{ y: 30, opacity: 0 }}
             viewport={{ once: true }}
             className="bg-white p-12 rounded-[3rem] border border-[#F0EBE6] shadow-xl shadow-orange-50/50"
          >
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 mb-8 transform -rotate-6">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Our Mission</h2>
            <p className="text-[#6D6D6D] leading-relaxed text-lg">
              To inspire the coast through exceptionally fresh, healthy flavours and meticulously 
              crafted treats that make everyday moments feel extraordinary.
            </p>
          </motion.div>
          <motion.div 
             whileInView={{ y: 0, opacity: 1 }}
             initial={{ y: 30, opacity: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-white p-12 rounded-[3rem] border border-[#F0EBE6] shadow-xl shadow-orange-50/50"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-500 mb-8 transform rotate-6">
              <Sun className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Our Vision</h2>
            <p className="text-[#6D6D6D] leading-relaxed text-lg">
              To become East Africa's most cherished dessert and juice lounge, 
              known for our coastal heritage, innovative recipes, and unwavering 
              commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-4 bg-white border-t border-[#F5E6DA]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-20">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {[
              { icon: Users, title: 'Community First', desc: 'We source our fruits from local farmers, supporting the Mombasa economy.', color: 'pink' },
              { icon: Sun, title: 'Pure & Natural', desc: 'No artificial additives. Just pure, unadulterated coastal goodness.', color: 'yellow' },
              { icon: MapPin, title: 'Authentically Coastal', desc: 'Reflecting the unique spirit and flavours of the 254.', color: 'orange' }
            ].map((value, i) => (
              <div key={i} className="space-y-6">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-sm ${
                  value.color === 'pink' ? 'bg-pink-50 text-pink-500' : 
                  value.color === 'yellow' ? 'bg-yellow-50 text-yellow-500' : 
                  'bg-orange-50 text-orange-500'
                }`}>
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-2xl text-[#2D2D2D]">{value.title}</h3>
                <p className="text-[#6D6D6D] text-lg leading-relaxed max-w-xs mx-auto">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
