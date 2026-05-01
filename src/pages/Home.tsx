import { motion } from 'motion/react';
import { Search, ArrowRight, Star, Clock, Heart, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#FFFBF7]">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 md:px-8 bg-[#FFF9F5] border-b border-[#F5E6DA] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-6/12 z-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-pink-100/50 text-pink-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                ✨ Taste the Sun ✨
              </div>
              <h1 className="text-5xl md:text-8xl font-bold text-[#2D2D2D] tracking-tight leading-[0.95] mb-8">
                Freshly Squeezed <br />
                <span className="text-[#FF7A59]">Happiness.</span>
              </h1>
              <p className="text-xl text-[#6D6D6D] mb-10 max-w-lg leading-relaxed mx-auto md:mx-0">
                Mombasa's sweetest hideout for handcrafted juices, bubbly smoothies, and artisanal treats.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link 
                  to="/menu" 
                  className="bg-[#FF7A59] text-white px-10 py-4 rounded-full font-bold hover:bg-[#ff6a42] transition-all shadow-xl shadow-orange-100 flex items-center transform hover:scale-105"
                >
                  <Search className="w-5 h-5 mr-3" />
                  See the Menu
                </Link>
                <Link 
                  to="/about" 
                  className="bg-white border-2 border-[#FFE4D3] text-[#FF7A59] px-10 py-4 rounded-full font-bold hover:bg-[#FFFBF7] transition-all transform hover:scale-105"
                >
                  Our Story
                </Link>
              </div>

              <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-pink-50 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?u=cute${i}`} alt="user" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-[#6D6D6D]">
                  <span className="text-[#2D2D2D] font-bold block">Trusted by 1,000+ neighbors</span>
                  <div className="flex text-yellow-400 mt-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-6/12 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[4rem] overflow-hidden shadow-3xl shadow-pink-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=2000&auto=format&fit=crop" 
                alt="Toriah's Finest Hero" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 shadow-sm">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                  <span className="font-bold text-[#2D2D2D]">Guest Pick!</span>
                </div>
              </div>
            </motion.div>
            {/* Background elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-pink-100/40 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-yellow-100/40 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">Choose Your Vibe</h2>
            <p className="text-[#6D6D6D] text-lg">Sweet, fresh, or somewhere in between? We got you.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Juices', icon: '🍹', bg: 'bg-orange-50', text: 'text-orange-600' },
              { name: 'Smoothies', icon: '🥤', bg: 'bg-blue-50', text: 'text-blue-600' },
              { name: 'Pastries', icon: '🥐', bg: 'bg-pink-50', text: 'text-pink-600' },
              { name: 'Desserts', icon: '🍰', bg: 'bg-yellow-50', text: 'text-yellow-600' },
            ].map((cat, i) => (
              <Link 
                key={i} 
                to="/menu" 
                className={`${cat.bg} p-12 rounded-[3rem] text-center flex flex-col items-center group border-2 border-transparent hover:border-white hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500`}
              >
                <div className="text-6xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{cat.icon}</div>
                <h3 className={`text-xl font-bold ${cat.text}`}>{cat.name}</h3>
                <div className="mt-4 w-10 h-1 bg-white/50 rounded-full"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 px-4 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">Mombasa Favourites</h2>
              <p className="text-[#6D6D6D] text-lg">The items our neighbors keep coming back for.</p>
            </div>
            <Link to="/menu" className="bg-white text-[#2D2D2D] px-8 py-3 rounded-full font-bold border-2 border-[#F0EBE6] hover:bg-gray-50 flex items-center group transition-all">
              See them all <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                name: 'Tropical Breeze', 
                cat: 'Fresh Juice',
                desc: 'Mombasa mango, passion fruit, and a kick of ginger.', 
                price: '450',
                img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80',
                color: 'bg-orange-50'
              },
              { 
                name: 'Velvet Dream', 
                cat: 'Desserts',
                desc: 'Silky Madagascar vanilla cream with a buttery home crust.', 
                price: '650',
                img: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80',
                color: 'bg-pink-50'
              },
              { 
                name: 'Berry Blush', 
                cat: 'Smoothies',
                desc: 'Wild coastal berries blended with cold-pressed honey.', 
                price: '550',
                img: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=600&q=80',
                color: 'bg-blue-50'
              },
            ].map((item, idx) => (
              <div key={idx} className="google-card overflow-hidden group border-none bg-white p-4">
                <div className="aspect-[4/5] overflow-hidden relative rounded-[2.5rem]">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <div>
                      <h3 className="font-bold text-[#2D2D2D]">{item.name}</h3>
                      <p className="text-xs text-[#6D6D6D] font-medium">{item.cat}</p>
                    </div>
                    <span className="bg-[#FF7A59] text-white px-4 py-2 rounded-full text-sm font-bold">KES {item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - AT THE BOTTOM */}
      <section className="py-32 px-4 bg-[#FFF9F5] border-t border-[#F5E6DA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-16 h-16 bg-[#FF7A59] text-white rounded-3xl flex items-center justify-center mx-auto mb-8 transform rotate-6 animate-bounce">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">Wall of Love</h2>
            <div className="flex justify-center text-orange-400 mb-4 gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />) }
            </div>
            <p className="text-[#6D6D6D] text-lg">What your neighbors are saying about Toriah's.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Fatma J.", role: "Nyali Local", quote: "The Tropical Breeze is literally summer in a glass. Best juice spot in Nyali! 🍹✨" },
              { name: "Kevin W.", role: "Dessert Lover", quote: "I come here for the cheesecake, but stay for the vibes. Super friendly staff! 🍰❤️" },
              { name: "Sarah M.", role: "Healthy Eater", quote: "Fresh, healthy, and absolutely delicious. Toriah's Finest never disappoints. 🍓🌿" },
            ].map((t, i) => (
              <motion.div 
                key={i} 
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[3rem] shadow-xl shadow-orange-100/50 border border-[#F0EBE6] relative"
              >
                <p className="text-[#2D2D2D] text-xl mb-10 leading-relaxed font-medium italic">"{t.quote}"</p>
                <div className="flex items-center gap-4 border-t border-[#F0EBE6] pt-8">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-[#FF7A59] font-bold text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[#2D2D2D]">{t.name}</div>
                    <div className="text-xs text-[#6D6D6D] uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
