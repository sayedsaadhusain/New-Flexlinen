
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, User, Search, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', path: '/shop' },
    { name: 'Men\'s Suits', path: '/shop?category=Men' },
    { name: 'Women\'s Suits', path: '/shop?category=Women' },
    { name: 'Summer Gear', path: '/shop?season=Summer' },
    { name: 'Amazon Store', path: 'https://amzn.in/d/8hEROr9', external: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-zinc-950/95 backdrop-blur-xl py-4 border-b border-zinc-900' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-3xl font-black tracking-tighter text-zinc-100 uppercase italic">
            Flex<span className="text-lime-400">Linen</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black text-orange-500 hover:text-orange-400 transition-colors tracking-[0.3em] uppercase flex items-center gap-1"
              >
                <ShoppingCart size={12} /> {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-[10px] font-black text-zinc-400 hover:text-lime-400 transition-colors tracking-[0.3em] uppercase"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <button className="text-zinc-100 hover:text-lime-400 transition-colors p-1 hidden sm:block">
            <Search size={18} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-zinc-100 hover:text-lime-400 transition-colors p-1"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-lime-400 text-zinc-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="lg:hidden text-zinc-100 p-1"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-zinc-950 border-l border-zinc-900 z-[70] p-10 flex flex-col"
            >
              <div className="flex items-center justify-between mb-16">
                <span className="font-display text-2xl font-black italic text-zinc-100">FLEXLINEN</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-zinc-400">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl font-display font-black text-orange-500 uppercase italic tracking-tighter"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-display font-black text-zinc-100 uppercase italic tracking-tighter hover:text-lime-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
