import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Truck } from 'lucide-react';
import OrderModal from '../components/OrderModal';

const categories = [
  { id: 'juices', name: 'Fresh Juices' },
  { id: 'smoothies', name: 'Smoothies' },
  { id: 'milkshakes', name: 'Milkshakes' },
  { id: 'cakes', name: 'Cakes & Pastries' },
  { id: 'icecream', name: 'Ice Cream' },
];

const menuItems = [
  {
    category: 'juices',
    name: 'Mombasa Sunrise',
    price: '400',
    desc: 'Pure orange, carrot, and a kick of ginger for your morning spark.',
    img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80'
  },
  {
    category: 'juices',
    name: 'Cooling Cucumber',
    price: '350',
    desc: 'Cucumber, lime, and mint. The ultimate heat-beater.',
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80'
  },
  {
    category: 'smoothies',
    name: 'Passion Berry Glow',
    price: '550',
    desc: 'Passion fruit, strawberries, and local honey blend.',
    img: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=600&q=80'
  },
  {
    category: 'cakes',
    name: 'Mango Passion Mousse',
    price: '600',
    desc: 'Light, airy mousse featuring the finest Mombasa mangoes.',
    img: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80'
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('juices');
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const handleOrderClick = (name?: string) => {
    setSelectedItem(name);
    setIsOrderOpen(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#FFFBF7]">
      {/* Menu Header */}
      <section className="bg-[#FFF9F5] border-b border-[#F5E6DA] py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-block bg-pink-100/50 text-pink-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            ✨ Sweet Selections ✨
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#2D2D2D] mb-6 tracking-tight leading-none">Our Menu</h1>
          <p className="text-[#6D6D6D] max-w-2xl text-lg mb-16 leading-relaxed">
            Every item is a small piece of Mombasa's sunshine, crafted with love and the freshest local ingredients.
          </p>
          
          {/* Category Chips */}
          <div className="flex items-center justify-center gap-4 overflow-x-auto pb-4 scroller-hide w-full max-w-5xl mx-auto px-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap border-2 transform hover:scale-105 active:scale-95 ${
                  activeCategory === cat.id
                    ? 'bg-[#FF7A59] text-white border-[#FF7A59] shadow-lg shadow-orange-100'
                    : 'bg-white text-[#6D6D6D] border-[#F0EBE6] hover:border-[#FF7A59] hover:text-[#FF7A59]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          <AnimatePresence mode="popLayout">
            {menuItems
              .filter((item) => item.category === activeCategory)
              .map((item) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="google-card group bg-white p-4 border-none shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className="h-64 overflow-hidden relative rounded-[2rem]">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full text-pink-500 hover:text-pink-600 transition-colors shadow-sm cursor-pointer">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-[#2D2D2D] transition-colors">{item.name}</h3>
                      <span className="text-[#FF7A59] font-bold">KES {item.price}</span>
                    </div>
                    <p className="text-[#6D6D6D] text-sm leading-relaxed mb-8 line-clamp-2">
                      {item.desc}
                    </p>
                    <button 
                      onClick={() => handleOrderClick(item.name)}
                      className="w-full bg-[#FF7A59] text-white px-6 py-3.5 rounded-2xl text-sm font-bold hover:bg-[#ff6a42] transition-colors shadow-sm transform active:scale-95"
                    >
                      Sweet Order
                    </button>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
        
        {menuItems.filter(item => item.category === activeCategory).length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-[#F0EBE6]">
            <div className="text-6xl mb-6">👩‍🍳</div>
            <p className="text-[#6D6D6D] font-bold text-lg italic">We're fine-tuning these flavours... back in a bit!</p>
          </div>
        )}
      </section>

      {/* Reviews Section at bottom of page content */}
      <section className="py-24 px-4 bg-[#FFFBF7] border-t border-[#F5E6DA]">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-3xl font-bold text-[#2D2D2D] mb-12">Neighborhood Favourites</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Fatma J.", quote: "The Sunrise juice is magic. Best way to start a Nyali morning!" },
                { name: "Kevin W.", quote: "That mousse cake... I dream about it. Super cute spot too." },
                { name: "Sarah M.", quote: "Quality is top tier. You can tell everything is fresh." },
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-[#F0EBE6]">
                  <div className="flex text-yellow-400 mb-4 justify-center">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-[#2D2D2D] italic mb-6">"{t.quote}"</p>
                  <div className="font-bold text-sm text-[#6D6D6D]">— {t.name}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 bg-white border-t border-[#F5E6DA]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-[#2D2D2D]">Ordering Made Sweet</h2>
            <p className="text-[#6D6D6D] leading-relaxed text-lg">
              Pick up your treats or let us bring them to you—either way, it's easy and fast across Mombasa.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start p-8 bg-[#FFF9F5] rounded-[2rem] border-2 border-white shadow-sm">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#FF7A59] mr-6 shrink-0 shadow-sm">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D2D2D] text-lg mb-2">Self Pickup</h4>
                  <p className="text-sm text-[#6D6D6D]">Visit us in Nyali daily from 8am.</p>
                </div>
              </div>
              <div className="flex items-start p-8 bg-[#F0FDF4] rounded-[2rem] border-2 border-white shadow-sm">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#34A853] mr-6 shrink-0 shadow-sm">
                  <Truck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2D2D2D] text-lg mb-2">Delivery</h4>
                  <p className="text-sm text-[#6D6D6D]">To your door, anywhere in Mombasa.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 bg-[#FFFBF7] p-12 rounded-[3rem] text-center flex flex-col justify-center border-4 border-white shadow-xl">
            <h3 className="text-3xl font-bold text-[#2D2D2D] mb-4">Ready to Zest?</h3>
            <p className="text-[#6D6D6D] text-sm mb-10 leading-relaxed">Choose your preferred way to contact us for the fastest service.</p>
            <button 
              onClick={() => handleOrderClick()}
              className="bg-[#FF7A59] text-white py-4 rounded-full font-bold hover:bg-[#ff6a42] transition-colors shadow-lg transform hover:scale-105 active:scale-95"
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      <OrderModal 
        isOpen={isOrderOpen} 
        onClose={() => setIsOrderOpen(false)} 
        itemName={selectedItem}
      />
    </div>
  );
}
