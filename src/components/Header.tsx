import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Theater, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

  const isLightScrolled = theme === 'light' && scrolled;

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
              <span className={`font-display text-xl font-bold tracking-wider transition-colors duration-300 ${isLightScrolled ? 'text-stone-900' : 'text-white'}`}>
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
                      ? isLightScrolled ? 'text-gold-700 font-semibold' : 'text-gold-400'
                      : isLightScrolled ? 'text-stone-700 hover:text-gold-700' : 'text-gray-300 hover:text-gold-400'
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
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2.5 rounded-full hover:bg-gold-500/10 transition-all duration-300 flex items-center justify-center border border-transparent hover:border-gold-500/20 active:scale-95"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className={`w-4 h-4 ${scrolled ? 'text-stone-850' : 'text-white'}`} />
              ) : (
                <Sun className="w-4 h-4 text-gold-400" />
              )}
            </button>
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-gold-700 to-gold-600 text-theatre-black font-semibold text-sm uppercase tracking-wider rounded hover:from-gold-600 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-900/30"
            >
              Join Now
            </Link>
          </nav>

          {/* Mobile Theme Toggle & Menu Toggle wrapper */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors active:scale-95 ${
                isLightScrolled ? 'text-stone-850 hover:bg-gold-500/10' : 'text-gray-300 hover:bg-gold-500/10'
              }`}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-gold-400" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                isLightScrolled ? 'text-stone-900 hover:text-gold-700' : 'text-gray-300 hover:text-gold-400'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
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
                    ? 'text-gold-500 bg-gold-500/10 font-semibold'
                    : theme === 'light'
                      ? 'text-stone-700 hover:text-gold-700 hover:bg-stone-100'
                      : 'text-gray-300 hover:text-gold-400 hover:bg-theatre-dark/50'
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
