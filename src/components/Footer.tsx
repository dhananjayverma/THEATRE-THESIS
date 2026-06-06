import { Link } from 'react-router-dom';
import { Theater, Phone, Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-theatre-black/80 backdrop-blur-md border-t border-gold-900/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Theater className="w-8 h-8 text-gold-500" />
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-white tracking-wider">
                  THEATRE THESIS
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500">
                  Acting Studio
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Training Actors for Screen, Stage & Self. A creative space for aspiring
              actors and performers to master the art of acting.
            </p>
            <div className="flex gap-3">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold-900/40 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/60 hover:bg-gold-900/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/courses', label: 'Courses' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/testimonials', label: 'Reviews' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold-700 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-display text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Our Courses
            </h3>
            <ul className="space-y-3">
              {[
                'Beginner Acting Course',
                'Theatre Acting Workshop',
                'Camera Acting Training',
                'Voice & Body Training',
                'Weekend Workshops',
              ].map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold-700 rounded-full" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span>Theatre Thesis Acting Studio, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span>info@theatrethesis.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-900/20 bg-theatre-dark/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; 2026 Theatre Thesis Acting Studio. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Training Actors for Screen, Stage & Self
          </p>
        </div>
      </div>
    </footer>
  );
}
