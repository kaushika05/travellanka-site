import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + sectionId);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <button onClick={() => handleNavigation('features')} className="text-gray-700 hover:text-primary">Features</button>
            <button onClick={() => handleNavigation('premium')} className="text-gray-700 hover:text-primary">Premium</button>
            <button onClick={() => handleNavigation('community')} className="text-gray-700 hover:text-primary">Community</button>
            <button onClick={() => handleNavigation('contact')} className="text-gray-700 hover:text-primary">Contact</button>
            <button onClick={() => handleNavigation('about')} className="text-gray-700 hover:text-primary">About</button>
            <button onClick={() => handleNavigation('faq')} className="text-gray-700 hover:text-primary">FAQ</button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavigation('features')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
            >
              Features
            </button>
            <button
              onClick={() => handleNavigation('premium')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
            >
              Premium
            </button>
            <button
              onClick={() => handleNavigation('community')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
            >
              Community
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('faq')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary/10 rounded-md"
            >
              FAQ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;