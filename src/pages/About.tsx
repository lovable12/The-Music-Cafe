import { motion } from 'motion/react';
import { Music, Coffee, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-stone-950 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white font-serif mb-4"
          >
            About Us
          </motion.h1>
          <p className="text-stone-400 max-w-2xl mx-auto">
            More than just a cafe, we are a community of music lovers and food enthusiasts.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
              alt="Cafe Interior"
              className="rounded-2xl shadow-2xl border border-stone-800"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-amber-50 font-serif">Our Story</h2>
            <p className="text-stone-400 leading-relaxed">
              Founded in the heart of Jessore, The Music Cafe was born from a simple idea: to create a space where great food and great music come together. We wanted to offer more than just a meal; we wanted to offer an experience.
            </p>
            <p className="text-stone-400 leading-relaxed">
              Our cozy, music-themed ambiance is designed to let you unwind, relax, and enjoy the company of friends and family. Whether you're here for a quick bite or a long evening of live music, we promise to make every moment memorable.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-stone-900 p-3 rounded-full text-amber-500">
                  <Music className="h-6 w-6" />
                </div>
                <span className="font-medium text-stone-300">Live Music</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-stone-900 p-3 rounded-full text-amber-500">
                  <Coffee className="h-6 w-6" />
                </div>
                <span className="font-medium text-stone-300">Premium Coffee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-stone-900 p-3 rounded-full text-amber-500">
                  <Users className="h-6 w-6" />
                </div>
                <span className="font-medium text-stone-300">Friendly Staff</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-stone-900 p-3 rounded-full text-amber-500">
                  <Star className="h-6 w-6" />
                </div>
                <span className="font-medium text-stone-300">Top Quality</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="bg-stone-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-50 font-serif mb-6">Our Mission</h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              "To serve happiness through delicious food and soulful music, creating a haven where every guest feels like a star."
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
