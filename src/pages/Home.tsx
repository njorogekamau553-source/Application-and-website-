import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 px-4 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-7/12">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#FF5C00] font-black uppercase text-sm tracking-widest mb-6 italic"
            >
              Mombasa's Premium Juice Lounge
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[60px] md:text-[110px] leading-[0.9] font-black uppercase tracking-tighter italic mb-8 select-none"
            >
              Fresh <span className="text-[#008148]">Flavours.</span><br />
              Sweet Moments.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl max-w-md leading-relaxed text-[#1A1A1A]/70 font-medium mb-10"
            >
              Experience the vibrant soul of Mombasa through our handcrafted cold-pressed juices and artisanal desserts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/menu" 
                className="bg-[#1A1A1A] text-white px-10 py-5 font-black uppercase text-sm tracking-widest hover:bg-black transition-all shadow-xl shadow-black/10"
              >
                Order Now
              </Link>
              <Link 
                to="/menu" 
                className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-10 py-5 font-black uppercase text-sm tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all"
              >
                View Menu
              </Link>
            </motion.div>
          </div>
          
          <div className="md:w-5/12 w-full h-[400px] md:h-[600px] relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=2000&auto=format&fit=crop" 
              alt="Toriah's Finest Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="uppercase text-xs font-bold tracking-widest mb-2 text-[#FF5C00]">Featured Today</span>
              <h3 className="text-3xl font-black italic uppercase leading-none">The Zesty Mombasa Punch</h3>
              <p className="text-sm mt-2 opacity-80 uppercase font-bold tracking-tighter">Mango, Passion, Lime & Coastal Sea Salt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#FF5C00] font-black uppercase text-xs tracking-widest mb-4 italic">Our Speciality</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">Favourites.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Tropical Breeze', 
                cat: 'Juices',
                desc: 'Mombasa mango, passion fruit, and ginger.', 
                price: '450',
                color: 'bg-white border-[#1A1A1A]/10 border',
                img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80' 
              },
              { 
                name: 'Velvet Cake', 
                cat: 'Desserts',
                desc: 'Rich Madagascar vanilla cream with butter crust.', 
                price: '650',
                color: 'bg-[#FFD100]',
                img: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80' 
              },
              { 
                name: 'Berry Blast', 
                cat: 'Smoothies',
                desc: 'Local wild berries and organic honey.', 
                price: '550',
                color: 'bg-[#008148] text-white',
                img: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=600&q=80' 
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`${item.color} rounded-[2.5rem] overflow-hidden p-6 flex flex-col h-full border border-[#1A1A1A]/5`}
              >
                <div className="h-64 rounded-3xl overflow-hidden mb-8">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-black text-xs uppercase tracking-widest opacity-70">{item.cat}</span>
                      <span className="font-black text-sm uppercase">KES {item.price}</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4 leading-none">{item.name}</h3>
                    <p className="text-xs uppercase font-bold leading-relaxed opacity-70 mb-8">{item.desc}</p>
                  </div>
                  <button className="w-full border-2 border-current px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-current hover:text-[#FAF9F6] transition-colors">
                    Order This
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-4 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80" 
              alt="Our Story" 
              className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2 space-y-10">
            <p className="text-[#FF5C00] font-black uppercase text-xs tracking-widest italic">Authentically 254</p>
            <h2 className="text-5xl md:text-[80px] font-black leading-[0.85] uppercase italic tracking-tighter">Crafted <br />for the Coast.</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              At Toriah's Finest Tastes, we believe every moment deserves a touch of sweetness. 
              Our journey started in the vibrant streets of Mombasa, with a simple goal: 
              to serve the freshest ingredients in the most delightful ways.
            </p>
            <Link 
              to="/about" 
              className="inline-block bg-[#FF5C00] text-white px-10 py-5 font-black uppercase text-sm tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-[#FF5C00] font-black uppercase text-xs tracking-widest italic">Kind Words</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">Guests.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Fatma J.", quote: "The Tropical Breeze is literally summer in a glass. Best juice spot in Nyali!" },
              { name: "Kevin W.", quote: "I come here for the cheesecake, but stay for the atmosphere. Super friendly staff." },
              { name: "Sarah M.", quote: "Fresh, healthy, and absolutely delicious. Toriah's Finest never disappoints." },
            ].map((t, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-[#1A1A1A]/5 shadow-sm">
                <p className="italic text-lg text-[#1A1A1A] mb-8 leading-relaxed font-medium">"{t.quote}"</p>
                <div className="font-black text-xs uppercase tracking-widest text-[#FF5C00]">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
            <div>
              <p className="text-[#FF5C00] font-black uppercase text-xs tracking-widest italic">The Journal</p>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">Latest.</h2>
            </div>
            <Link to="/blog" className="text-[#1A1A1A] font-black uppercase text-xs tracking-widest border-b-2 border-[#1A1A1A] pb-1 hover:text-[#FF5C00] hover:border-[#FF5C00] transition-all">
              View All Posts
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Staying Cool in Mombasa', date: 'Oct 12', img: 'https://images.unsplash.com/photo-1547514701-42782101795c?w=600' },
              { title: 'The Coastal Mango Secret', date: 'Oct 05', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600' },
              { title: 'Fresh Juice vs Bottled', date: 'Sep 28', img: 'https://images.unsplash.com/photo-1576091160550-2173bdd99972?w=600' },
            ].map((p, i) => (
              <Link to="/blog" key={i} className="group">
                <div className="rounded-[2.5rem] overflow-hidden mb-8 relative aspect-square shadow-xl shadow-gray-100">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent flex flex-col justify-end p-10">
                    <div className="text-[#FF5C00] text-[10px] font-black uppercase tracking-widest mb-3 italic">{p.date}</div>
                    <h3 className="text-white text-2xl font-black italic uppercase leading-none">{p.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
