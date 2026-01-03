
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
               <span className="font-display text-3xl font-bold tracking-tighter text-zinc-100 uppercase italic">FlexLinen</span>
            </Link>
            <p className="text-zinc-500 leading-relaxed max-w-xs">
              Redefining performance activewear for the modern athlete. Move with confidence, wear with pride.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-lime-400 hover:text-zinc-950 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-lime-400 hover:text-zinc-950 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-lime-400 hover:text-zinc-950 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-lime-400 hover:text-zinc-950 transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-zinc-100 font-bold uppercase tracking-[0.2em] mb-8 text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-zinc-500 hover:text-lime-400 transition-colors uppercase text-xs font-bold tracking-widest">Shop All</Link></li>
              <li><Link to="/about" className="text-zinc-500 hover:text-lime-400 transition-colors uppercase text-xs font-bold tracking-widest">Our Story</Link></li>
              <li><Link to="/contact" className="text-zinc-500 hover:text-lime-400 transition-colors uppercase text-xs font-bold tracking-widest">Contact</Link></li>
              <li><Link to="/auth" className="text-zinc-500 hover:text-lime-400 transition-colors uppercase text-xs font-bold tracking-widest">My Account</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-100 font-bold uppercase tracking-[0.2em] mb-8 text-sm">Customer Care</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors uppercase text-xs font-bold tracking-widest">Returns & Exchanges</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors uppercase text-xs font-bold tracking-widest">Size Guide</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors uppercase text-xs font-bold tracking-widest">Shipping Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-lime-400 transition-colors uppercase text-xs font-bold tracking-widest">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-zinc-100 font-bold uppercase tracking-[0.2em] mb-8 text-sm">Join the Crew</h4>
            <p className="text-zinc-500 text-sm italic">Get 10% off your first order and exclusive access to new drops.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:border-lime-400 outline-none uppercase tracking-widest font-bold"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-lime-400 hover:text-white transition-colors">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em] font-bold">
            &copy; {new Date().getFullYear()} FLEXLINEN PERFORMANCE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <div className="h-6 opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-full" alt="PayPal" />
            </div>
            <div className="h-4 opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-full" alt="Visa" />
            </div>
            <div className="h-6 opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer">
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-full" alt="MasterCard" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
