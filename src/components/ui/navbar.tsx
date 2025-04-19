
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm py-4">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-custom-blue">Business<span className="text-custom-gold">Digital</span></span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-custom-blue"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/simulateur" className="text-gray-700 hover:text-custom-blue transition-colors">
            Simulateur
          </Link>
          <Link to="/quiz" className="text-gray-700 hover:text-custom-blue transition-colors">
            Quiz
          </Link>
          <Link to="/mini-cours" className="text-gray-700 hover:text-custom-blue transition-colors">
            Mini-Cours
          </Link>
          <Link to="/generateur" className="text-gray-700 hover:text-custom-blue transition-colors">
            Idées Virales
          </Link>
          <Link to="/offre" className="text-gray-700 hover:text-custom-blue transition-colors">
            Offre Premium
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 border-b border-gray-200">
            <nav className="flex flex-col px-4 py-2">
              <Link 
                to="/simulateur" 
                className="py-3 px-2 border-b border-gray-100 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Simulateur
              </Link>
              <Link 
                to="/quiz" 
                className="py-3 px-2 border-b border-gray-100 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Quiz
              </Link>
              <Link 
                to="/mini-cours" 
                className="py-3 px-2 border-b border-gray-100 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Mini-Cours
              </Link>
              <Link 
                to="/generateur" 
                className="py-3 px-2 border-b border-gray-100 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Idées Virales
              </Link>
              <Link 
                to="/offre" 
                className="py-3 px-2 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Offre Premium
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
