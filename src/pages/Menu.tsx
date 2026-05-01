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
    <div className="pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="bg-white py-32 px-4 border-b border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#FF5C00] font-black uppercase text-xs tracking-widest italic mb-4">Taste the Soul of Mombasa</p>
          <h1 className="text-6xl md:text-[100px] font-black uppercase italic tracking-tighter leading-[0.85] mb-8">Digital <br />Menu.</h1>
          <p className="text-[#1A1A1A]/70 max-w-2xl text-lg font-medium">
            From cold-pressed coastal juices to decadent artisanal pastries, every item is crafted with 
            premium local ingredients.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white sticky top-[72px] z-40 border-b border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scroller-hide">
          <div className="flex space-x-12 py-8 whitespace-nowrap min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all pb-1 border-b-2 ${
                  activeCategory === cat.id ? 'text-[#FF5C00] border-[#FF5C00]' : 'text-[#1A1A1A]/40 border-transparent hover:text-[#1A1A1A]/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {menuItems
                .filter(item => item.category === activeCategory || activeCategory === 'all')
                .map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="group bg-white p-6 rounded-[2.5rem] border border-[#1A1A1A]/5 hover:border-[#1A1A1A]/20 transition-all"
                  >
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-black uppercase italic tracking-tighter text-[#1A1A1A]">{item.name}</h3>
                      <span className="font-black text-[#FF5C00] text-sm uppercase">KES {item.price}</span>
                    </div>
                    <p className="text-[#1A1A1A]/60 text-xs font-bold uppercase tracking-tighter leading-relaxed mb-8">
                      {item.desc}
                    </p>
                    <button 
                      onClick={() => handleOrderClick(item.name)}
                      className="w-full inline-flex items-center justify-center bg-[#1A1A1A] text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#FF5C00] transition-colors"
                    >
                      Order Now
                    </button>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
          
          {menuItems.filter(item => item.category === activeCategory).length === 0 && (
              <div className="text-center py-20 text-gray-400">
                Coming soon... we're fine-tuning these flavours!
              </div>
          )}
        </div>
      </section>

      {/* Floating Order Info */}
      <section className="bg-orange-600 text-white py-12 px-4 shadow-2xl shadow-orange-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">How to Order?</h2>
            <p className="text-orange-100 mb-8 max-w-md">
              Order directly via your preferred channel for lightning-fast service. 
              Available for pickup in Nyali or delivery across Mombasa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center bg-orange-700/50 p-4 rounded-2xl">
                <ShoppingBag className="w-8 h-8 mr-4 text-orange-200" />
                <div>
                  <div className="font-bold">Self Pickup</div>
                  <div className="text-xs text-orange-200">Nyali, Mombasa</div>
                </div>
              </div>
              <div className="flex items-center bg-orange-700/50 p-4 rounded-2xl">
                <Truck className="w-8 h-8 mr-4 text-orange-200" />
                <div>
                  <div className="font-bold">Home Delivery</div>
                  <div className="text-xs text-orange-200">Across Mombasa</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl text-gray-900 text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Zest?</h3>
            <p className="text-gray-500 mb-6 text-sm">Our team is online and ready for your order.</p>
            <button 
              onClick={() => handleOrderClick()}
              className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200"
            >
              Choose Order Option
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
