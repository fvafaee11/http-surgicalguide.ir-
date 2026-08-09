import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-secondary rounded-full animate-pulse" />
          <span className="text-xl font-bold text-white tracking-tighter">SURGICAL GUIDE</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-secondary transition-colors">Home</a>
          <a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a>
          <a href="#services" className="hover:text-secondary transition-colors">Services</a>
          <a href="#order" className="bg-secondary text-primary px-5 py-2 rounded-full hover:bg-white transition-all">Order Now</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-b border-white/10 p-6 flex flex-col space-y-4">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#order" onClick={() => setIsOpen(false)} className="text-secondary">Order Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
