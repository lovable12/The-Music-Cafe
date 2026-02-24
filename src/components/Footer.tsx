import { Facebook, Instagram, MapPin, Phone, Mail, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-amber-500 p-2 rounded-full group-hover:rotate-12 transition-transform duration-300">
                <Music className="h-6 w-6 text-stone-900" />
              </div>
              <span className="text-xl font-bold text-amber-50 tracking-wider font-serif">
                The Music Cafe
              </span>
            </Link>
            <p className="text-stone-400 leading-relaxed">
              Great Food, Great Music, Great Moments in Jessore. Experience the perfect blend of culinary delights and musical vibes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-amber-600 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-amber-600 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-amber-50 mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1 w-1 bg-amber-500 rounded-full"></span> Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-500 transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1 w-1 bg-amber-500 rounded-full"></span> Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1 w-1 bg-amber-500 rounded-full"></span> About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-500 transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1 w-1 bg-amber-500 rounded-full"></span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500 transition-colors duration-200 flex items-center gap-2">
                  <span className="h-1 w-1 bg-amber-500 rounded-full"></span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-amber-50 mb-6 font-serif">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1 shrink-0" />
                <span>Jessore, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                <span>info@musiccafejashore.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-amber-50 mb-6 font-serif">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-amber-500">10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-amber-500">10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-amber-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} The Music Cafe Jashore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
