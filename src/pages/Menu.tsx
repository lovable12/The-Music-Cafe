import { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { menuItems, categories } from '../data/menu';
import { Search, Filter, ShoppingCart } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-stone-950 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white font-serif mb-4"
          >
            Our Menu
          </motion.h1>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Discover our delicious range of burgers, pizzas, and refreshing drinks crafted with passion.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 w-full md:w-auto gap-2 custom-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/50'
                    : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white border border-stone-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder-stone-500"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone-500" />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-500/30 group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-w-16 aspect-h-10 h-56">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Special
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-amber-50 font-serif">{item.name}</h3>
                    <span className="text-amber-500 font-bold text-lg">৳{item.price}</span>
                  </div>
                  <p className="text-stone-400 text-sm mb-6 line-clamp-2 h-10">{item.description}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-stone-800 hover:bg-amber-600 text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-amber-900/20"
                  >
                    <ShoppingCart className="h-5 w-5" /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-stone-500 text-lg">No items found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-amber-500 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
