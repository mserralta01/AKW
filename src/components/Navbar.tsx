import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import IntakeForm from './IntakeForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img src="https://onovem.com/akwlogo.png" alt="AKW Racing" className="h-12" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-[#1e3d59] font-medium">
              Home
            </button>
            <div className="relative group">
              <button onClick={() => scrollToSection('academy')} className="flex items-center text-gray-800 hover:text-[#1e3d59] font-medium">
                Academy <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2">
                <button onClick={() => scrollToSection('academy')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Programs</button>
                <button onClick={() => scrollToSection('facilities')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Facilities</button>
                <button onClick={() => scrollToSection('trainers')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Trainers</button>
              </div>
            </div>
            <button onClick={() => scrollToSection('racers')} className="text-gray-800 hover:text-[#1e3d59] font-medium">
              Our Racers
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-[#1e3d59] font-medium">
              Contact
            </button>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-[#ff1e1e] text-white px-6 py-2 rounded-md hover:bg-[#e01818] transition-colors"
            >
              Join AKW
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-800">Home</button>
            <button onClick={() => scrollToSection('academy')} className="block w-full text-left px-3 py-2 text-gray-800">Academy</button>
            <button onClick={() => scrollToSection('racers')} className="block w-full text-left px-3 py-2 text-gray-800">Our Racers</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-800">Contact</button>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsFormOpen(true);
              }}
              className="block w-full text-left px-3 py-2 bg-[#ff1e1e] text-white rounded-md"
            >
              Join AKW
            </button>
          </div>
        </div>
      )}

      <IntakeForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </nav>
  );
};

export default Navbar;