
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    { id: 'web-development', name: 'Web Development', route: '/web-development' },
    { id: 'ai-chatbot', name: 'AI Chatbot', route: '/ai-chatbot' },
    { id: 'call-answerer', name: 'Call Answerer', route: '/call-answerer' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    // Navigate to landing page if not already there
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Websora"
        >
          <img 
            src="/logo.png" 
            alt="Websora" 
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            Accueil
          </a>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button 
              className="nav-link flex items-center space-x-1"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              <span>Services</span>
              <ChevronDown size={16} className={cn(
                "transition-transform duration-200",
                isServicesOpen ? "rotate-180" : ""
              )} />
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={cn(
                "absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all duration-200",
                isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              )}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              {services.map((service) => {
                const isActive = location.pathname === service.route;
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      navigate(service.route);
                      setIsServicesOpen(false);
                      scrollToTop();
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm transition-colors duration-200",
                      isActive 
                        ? "bg-aura-50 text-aura-700 font-medium" 
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {service.name}
                  </button>
                );
              })}
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-aura-500 to-purple-600 hover:from-aura-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Commencer
          </button>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            className="text-gray-700 p-3 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a 
            href="#" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Accueil
          </a>
          
          {/* Mobile Services Menu */}
          <div className="w-full">
            <div className="text-lg font-semibold text-gray-800 mb-4 text-center">Services</div>
            {services.map((service) => {
              const isActive = location.pathname === service.route;
              return (
                <button
                  key={service.id}
                  onClick={() => {
                    navigate(service.route);
                    setIsMenuOpen(false);
                    document.body.style.overflow = '';
                    scrollToTop();
                  }}
                  className={cn(
                    "w-full text-center py-2 px-6 mb-2 rounded-lg transition-colors duration-200",
                    isActive 
                      ? "bg-aura-100 text-aura-700 font-medium" 
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {service.name}
                </button>
              );
            })}
          </div>
          
          <button 
            onClick={() => {
              navigate('/contact');
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
            className="bg-gradient-to-r from-aura-500 to-purple-600 hover:from-aura-600 hover:to-purple-700 text-white py-3 px-6 w-full text-center rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Commencer
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
