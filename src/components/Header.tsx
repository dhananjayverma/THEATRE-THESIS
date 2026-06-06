import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Theater } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/courses', label: 'Courses' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/testimonials', label: 'Reviews' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-theatre-black/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold-900/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Theater className="w-9 h-9 text-gold-500 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -inset-1 bg-gold-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-white tracking-wider">
                THEATRE THESIS
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-medium -mt-0.5">
                Acting Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                    active
                      ? 'text-gold-400'
                      : 'text-gray-300 hover:text-gold-400'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gold-500 rounded-full" />
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold-500 rounded-full transition-all duration-300 group-hover:w-6" />
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-gold-700 to-gold-600 text-theatre-black font-semibold text-sm uppercase tracking-wider rounded hover:from-gold-600 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-900/30"
            >
              Join Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-gold-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-theatre-black/90 backdrop-blur-md border-t border-gold-900/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium uppercase tracking-wider rounded transition-colors ${
                  active
                    ? 'text-gold-400 bg-gold-900/20'
                    : 'text-gray-300 hover:text-gold-400 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="block mx-4 mt-3 px-5 py-3 bg-gradient-to-r from-gold-700 to-gold-600 text-theatre-black font-semibold text-sm uppercase tracking-wider rounded text-center"
          >
            Join Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
