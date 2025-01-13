import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="/assets/travellanka_logo.svg" 
                alt="TravelLanka Logo" 
                className="h-8 w-8"
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary">Features</a>
            <a href="#premium" className="text-gray-700 hover:text-primary">Premium</a>
            <a href="#community" className="text-gray-700 hover:text-primary">Community</a>
            <a href="#contact" className="text-gray-700 hover:text-primary">Contact</a>
            <a href="#about" className="text-gray-700 hover:text-primary">About</a>
            <a href="#faq" className="text-gray-700 hover:text-primary">FAQ</a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#premium"
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Premium
            </a>
            <a
              href="#community"
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Community
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;