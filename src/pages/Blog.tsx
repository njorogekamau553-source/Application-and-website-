import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: '5 Refreshing Juice Recipes for the Mombasa Heat',
    excerpt: 'Stay cool and hydrated with these local island-inspired blends...',
    category: 'Recipes',
    date: 'Oct 12, 2023',
    author: 'Chef Amina',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795c?w=800&q=80'
  },
  {
    title: 'The Secret to the Perfect Coastal Mango Cheesecake',
    excerpt: 'Hint: It is all about the ripening stage of our local mangoes...',
    category: 'Desserts',
    date: 'Oct 05, 2023',
    author: 'Bakery Team',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80'
  },
  {
    title: 'Healthy Living: Why Fresh Juice Beats Bottled Every Time',
    excerpt: 'Discover the nutritional benefits of cold-pressed coastal fruits...',
    category: 'Tips',
    date: 'Sep 28, 2023',
    author: 'Healthy Sips',
    image: 'https://images.unsplash.com/photo-1576091160550-2173bdd99972?w=800&q=80'
  }
];

export default function Blog() {
  return (
    <div className="pt-24 min-h-screen pb-20 bg-[#FAF9F6]">
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-24">
            <p className="text-[#FF5C00] font-black uppercase text-xs tracking-widest italic mb-6">Toriah's Journal</p>
            <h1 className="text-6xl md:text-[110px] font-black mb-10 text-[#1A1A1A] tracking-tighter italic leading-[0.85] uppercase">Coastal <br />Journal.</h1>
            <p className="text-[#1A1A1A]/70 text-lg font-medium leading-relaxed max-w-2xl">
              Explore recipes, healthy tips, and the vibrant food culture of Mombasa. 
              We're sharing our passion one post at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-96 rounded-[3rem] overflow-hidden mb-8 shadow-xl shadow-[#1A1A1A]/5">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider text-[#FF5C00] shadow-xl">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-6 italic">
                  <span>{post.date}</span>
                  <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full"></span>
                  <span>By {post.author}</span>
                </div>

                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-6 group-hover:text-[#FF5C00] transition-colors leading-[0.95]">
                  {post.title}
                </h3>
                
                <p className="text-[#1A1A1A]/60 text-sm font-medium mb-10 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-[#1A1A1A] font-black uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform border-b-2 border-[#1A1A1A] pb-1 w-max">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <div className="mt-40 bg-[#1A1A1A] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[#FF5C00] font-black uppercase text-xs tracking-widest italic mb-6">Stay Fresh</p>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-8">Weekly Digest.</h2>
              <p className="text-gray-400 mb-12 max-w-lg mx-auto font-medium">
                Join our community of juice lovers and dessert enthusiasts. 
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white w-full focus:outline-none focus:ring-2 focus:ring-[#FF5C00]"
                />
                <button className="bg-[#FF5C00] text-white px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-orange-600 transition shadow-xl shadow-orange-900/20 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5C00]/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#008148]/10 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
