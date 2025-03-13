
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-xl md:text-2xl font-bold text-foreground tracking-tight flex items-center"
            >
              <span className="text-primary">Senipy</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </Link>
            <Link to="/#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </Link>
            <Link to="/login" className="text-foreground hover:text-primary transition-colors font-medium">
              Login
            </Link>
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              className="text-foreground focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slide-down">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#features" 
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#testimonials" 
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/login" 
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
