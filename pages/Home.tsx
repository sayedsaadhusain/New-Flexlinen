
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Wind, Shield, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featured = PRODUCTS.filter(p => p.isFeatured);

  return (
    <div className="flex flex-col w-full bg-zinc-950">
      {/* Cinematic Hero - Strictly Apparel Focused */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2 }}
            src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2000&auto=format&fit=crop"
            alt="Premium Gym Track Suit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-lime-400 font-bold tracking-[0.4em] uppercase text-xs mb-6 block bg-lime-400/10 w-fit px-4 py-1 rounded-full border border-lime-400/20">
              Professional Performance Apparel by FlexLinen
            </span>
            <h1 className="text-6xl md:text-[110px] font-black font-display text-zinc-100 uppercase leading-[0.85] mb-8 italic tracking-tighter">
              Premium <br /> <span className="text-transparent stroke-text text-lime-400">Gym Track Suits</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link
                to="/shop"
                className="bg-lime-400 hover:bg-white text-zinc-950 px-12 py-5 rounded-sm font-bold uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 group w-full sm:w-auto"
              >
                Shop Track Suits
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <div className="hidden sm:block h-px w-20 bg-zinc-800" />
              <p className="text-zinc-300 max-w-sm text-sm font-medium uppercase tracking-widest leading-relaxed">
                Experience the pinnacle of activewear engineering. FlexLinen track suits are designed for movement, durability, and style.
              </p>
            </div>

            {/* Direct Amazon Redirect in Hero */}
            <div className="mt-8">
              <a
                href="https://amzn.in/d/8hEROr9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold uppercase tracking-widest text-xs transition-colors border-b border-orange-400/30 pb-1"
              >
                <ShoppingCart size={16} /> Shop FlexLinen on Amazon
              </a>
            </div>
          </motion.div>
        </div>

        <style>{`
          .stroke-text {
            -webkit-text-stroke: 1.5px #a3e635;
          }
        `}</style>
      </section>

      {/* Category Grid - Strictly Track Suit Focused */}
      <section className="py-20 bg-zinc-950 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Slim Fit', path: '/shop?fit=Slim+Fit' },
              { name: 'Zipper', path: '/shop?style=Zipper' },
              { name: 'Winter', path: '/shop?season=Winter' },
              { name: 'Summer', path: '/shop?season=Summer' }
            ].map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                className="group relative h-40 flex items-center justify-center border border-zinc-900 overflow-hidden"
              >
                <div className="absolute inset-0 bg-zinc-900 group-hover:bg-lime-400 transition-colors duration-500 opacity-20" />
                <span className="relative z-10 text-zinc-500 group-hover:text-zinc-950 font-bold uppercase tracking-widest text-sm transition-colors duration-500">
                  {cat.name} Suits
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apparel Drops */}
      <section className="py-32 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h3 className="text-5xl font-bold font-display uppercase italic tracking-tighter text-zinc-100">The <span className="text-lime-400">Elite</span> Drops</h3>
              <p className="text-zinc-500 mt-4 uppercase tracking-[0.2em] text-xs font-bold">Featured Track Suits from the FlexLinen Collection</p>
            </div>
            <Link to="/shop" className="text-zinc-400 hover:text-white uppercase font-bold text-xs tracking-[0.3em] pb-2 border-b border-zinc-800 transition-all flex items-center gap-2">
              Browse Collection <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Fabric & Tech Section - Focused on Apparel Construction */}
      <section className="py-40 bg-zinc-900 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/5] rounded-lg overflow-hidden border border-zinc-800"
              >
                <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Apparel Tech" />
              </motion.div>
              <div className="absolute -top-10 -right-10 bg-lime-400 text-zinc-950 p-10 hidden lg:block">
                <p className="text-6xl font-black italic">TECH</p>
                <p className="font-bold tracking-widest uppercase">Linen-Hybrid</p>
              </div>
            </div>
            <div>
              <h2 className="text-6xl font-display font-black uppercase italic text-zinc-100 mb-10 leading-none">
                Engineered for <br /> <span className="text-lime-400">Peak Movement</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-zinc-800 text-lime-400 rounded-sm">
                    <Wind size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-100 uppercase italic">Aero-Cool Technology</h4>
                    <p className="text-zinc-500 mt-2">Specialized weave that promotes constant airflow, keeping you cool during high-intensity training sessions.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-zinc-800 text-lime-400 rounded-sm">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-100 uppercase italic">Rip-Stop Durability</h4>
                    <p className="text-zinc-500 mt-2">High-tensile strength fibers that withstand abrasion and heavy usage without compromising on flexibility.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="mt-12 inline-flex items-center gap-4 text-zinc-100 hover:text-lime-400 font-bold uppercase tracking-widest transition-colors">
                Learn About Our Fabric <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-32 bg-zinc-950 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black font-display uppercase italic text-zinc-100 mb-10 leading-none">
            Join the <br /> <span className="text-lime-400">Movement.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/shop"
              className="bg-zinc-100 hover:bg-lime-400 text-zinc-950 px-16 py-6 rounded-full font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 w-full sm:w-auto"
            >
              Shop Full Collection
            </Link>
            <a
              href="https://amzn.in/d/8hEROr9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 w-full sm:w-auto"
            >
              Buy on Amazon
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
