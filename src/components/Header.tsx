import { Link } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Rocket className="h-8 w-8 text-emerald-400" />
            </motion.div>
            <span className="font-bold text-xl tracking-tight">
              Web Pages by <span className="text-emerald-400">ET</span>
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Home</Link>
            <Link to="/services" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Services</Link>
            <Link to="/about" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 border-t border-slate-700"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-700 rounded-md transition-colors">Home</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/services" className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-700 rounded-md transition-colors">Services</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-700 rounded-md transition-colors">About Us</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-700 rounded-md transition-colors">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
