import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-stone-950 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white font-serif mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-stone-400 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, feedback, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800 flex flex-col items-center text-center hover:border-amber-500/50 transition-colors">
                <div className="bg-stone-800 p-4 rounded-full text-amber-500 mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-amber-50 mb-2">Visit Us</h3>
                <p className="text-stone-400 text-sm">Jessore, Bangladesh</p>
              </div>
              <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800 flex flex-col items-center text-center hover:border-amber-500/50 transition-colors">
                <div className="bg-stone-800 p-4 rounded-full text-amber-500 mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-amber-50 mb-2">Call Us</h3>
                <p className="text-stone-400 text-sm">+880 1234-567890</p>
              </div>
              <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800 flex flex-col items-center text-center hover:border-amber-500/50 transition-colors">
                <div className="bg-stone-800 p-4 rounded-full text-amber-500 mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-amber-50 mb-2">Email Us</h3>
                <p className="text-stone-400 text-sm">info@musiccafe.com</p>
              </div>
              <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800 flex flex-col items-center text-center hover:border-amber-500/50 transition-colors">
                <div className="bg-stone-800 p-4 rounded-full text-amber-500 mb-4">
                  <Facebook className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-amber-50 mb-2">Follow Us</h3>
                <p className="text-stone-400 text-sm">@musiccafejashore</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-stone-900 p-8 rounded-3xl border border-stone-800">
              <h3 className="text-2xl font-bold text-amber-50 font-serif mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-stone-800 border border-stone-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-stone-800 border border-stone-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-stone-800 border border-stone-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full bg-stone-800 border border-stone-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-900/50 flex items-center justify-center gap-2"
                >
                  Send Message <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[400px] bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.497263373059!2d89.2166!3d23.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff108d32555555%3A0x1234567890abcdef!2sJessore%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-stone-900/90 backdrop-blur-md p-4 rounded-xl border border-stone-800 max-w-xs">
              <p className="text-amber-50 font-bold text-sm mb-1">The Music Cafe Jashore</p>
              <p className="text-stone-400 text-xs">Jessore, Bangladesh</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
