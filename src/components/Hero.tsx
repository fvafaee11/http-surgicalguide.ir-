import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Zap, Star } from 'lucide-react';
import Navbar from './Navbar';
import Gallery from './Gallery';

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/40 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4 border border-secondary/20">
              Precision Dental Engineering
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-6">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Surgical Guides</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl">
              Advanced 3D-printed surgical guides for dental implants. We combine high-precision engineering with clinical expertise to ensure safer, faster, and more predictable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#order" 
                className="bg-secondary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center"
              >
                Request a Design <ChevronRight className="ml-2" />
              </a>
              <a 
                href="#gallery" 
                className="border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                View Gallery
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
