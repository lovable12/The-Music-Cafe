import { motion } from 'motion/react';
import { ArrowRight, Music, Star, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/menu';

const Home = () => {
  const featuredItems = menuItems.filter((item) => item.featured).slice(0, 3);

  return (
    <div className="bg-stone-950 text-stone-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80"
            alt="Cafe Ambience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-amber-500 font-serif text-xl md:text-2xl tracking-widest uppercase mb-4">
              Welcome to The Music Cafe
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif leading-tight mb-6">
              Great Food. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Great Music.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 font-light">
              Experience the perfect harmony of culinary delights and musical vibes in the heart of Jessore.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/menu"
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-900/50 flex items-center gap-2"
              >
                Order Online <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent border-2 border-stone-400 hover:border-amber-500 text-stone-300 hover:text-amber-500 rounded-full font-bold text-lg transition-all duration-300 hover:bg-stone-900/50"
              >
                Visit Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-amber-500 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Music className="h-10 w-10 text-amber-500" />,
                title: 'Musical Ambiance',
                description: 'Enjoy live music sessions and a curated playlist that sets the perfect mood for dining.',
              },
              {
                icon: <Star className="h-10 w-10 text-amber-500" />,
                title: 'Premium Quality',
                description: 'We use only the freshest ingredients to craft dishes that delight your taste buds.',
              },
              {
                icon: <Clock className="h-10 w-10 text-amber-500" />,
                title: 'Cozy Atmosphere',
                description: 'A warm and welcoming space perfect for hanging out with friends and family.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-stone-800/50 p-8 rounded-2xl border border-stone-800 hover:border-amber-500/30 transition-colors text-center group"
              >
                <div className="bg-stone-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-stone-800 group-hover:border-amber-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-50 mb-4 font-serif">{feature.title}</h3>
                <p className="text-stone-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-24 bg-stone-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">Taste the Rhythm</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-serif">Featured Delights</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-amber-50 font-serif">{item.name}</h4>
                    <span className="text-amber-500 font-bold text-lg">৳{item.price}</span>
                  </div>
                  <p className="text-stone-400 text-sm mb-6 line-clamp-2">{item.description}</p>
                  <Link
                    to="/menu"
                    className="inline-block w-full text-center py-3 rounded-lg border border-stone-700 text-stone-300 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 font-medium"
                  >
                    View Menu
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold text-lg hover:underline underline-offset-4 transition-all"
            >
              Explore Full Menu <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">What Our Guests Say</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-serif">Customer Love</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahim Ahmed',
                role: 'Foodie',
                content: 'The Music Special Burger is hands down the best burger in Jessore! The vibe is amazing.',
                rating: 5,
              },
              {
                name: 'Sadia Islam',
                role: 'Music Lover',
                content: 'I love the live music sessions here. It’s the perfect place to hang out with friends.',
                rating: 5,
              },
              {
                name: 'Tanvir Hasan',
                role: 'Regular Customer',
                content: 'Great food, great music, and excellent service. Highly recommended!',
                rating: 4,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-stone-800/50 p-8 rounded-2xl border border-stone-800 hover:border-amber-500/30 transition-colors relative"
              >
                <div className="absolute -top-4 left-8 bg-amber-500 text-stone-900 p-2 rounded-full">
                  <Star className="h-6 w-6 fill-current" />
                </div>
                <p className="text-stone-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center text-amber-500 font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-50">{testimonial.name}</h4>
                    <p className="text-stone-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-multiply" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6">
            Ready to Experience the Vibe?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join us at The Music Cafe Jashore for an unforgettable evening of great food and live music.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-amber-600 hover:bg-stone-100 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Book a Table
            </Link>
            <a
              href="tel:+8801234567890"
              className="px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 rounded-full font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
