
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Added Wind to the list of icons imported from lucide-react
import { ShoppingBag, Star, Ruler, ChevronRight, ExternalLink, ShieldCheck, Truck, RotateCcw, ShoppingCart, Wind } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState<'fabric' | 'fit'>('fabric');

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <h2 className="text-3xl font-display uppercase italic mb-4">Track Suit Not Found</h2>
          <Link to="/shop" className="text-lime-400 font-bold uppercase tracking-widest text-xs underline">Back to Store</Link>
        </div>
      </div>
    );
  }

  if (!selectedColor && product.colors.length > 0) setSelectedColor(product.colors[0]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size for your track suit');
      return;
    }
    addToCart(product, selectedSize, selectedColor);
  };

  return (
    <div className="pt-32 pb-20 px-6 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-12">
          <Link to="/" className="hover:text-zinc-100">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-zinc-100">Track Suits</Link>
          <ChevronRight size={12} />
          <span className="text-zinc-100">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Gallery - Focused on Apparel Details */}
          <div className="space-y-6">
            <motion.div 
              layoutId={`img-${product.id}`}
              className="aspect-[3/4] rounded-sm overflow-hidden bg-zinc-900 border border-zinc-900"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-sm overflow-hidden border transition-all ${
                    selectedImage === idx ? 'border-lime-400' : 'border-zinc-800 opacity-40 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-10">
              <span className="text-lime-400 font-bold text-xs tracking-[0.3em] uppercase mb-4 block bg-lime-400/5 w-fit px-3 py-1 border border-lime-400/20">
                {product.category} • {product.fit} • {product.style}
              </span>
              <h1 className="text-5xl md:text-6xl font-black font-display text-zinc-100 uppercase mb-6 leading-none italic tracking-tighter">{product.name}</h1>
              <div className="flex items-center gap-6">
                <span className="text-4xl font-black text-zinc-100 tracking-tighter">₹{product.price.toLocaleString()}</span>
                <div className="h-8 w-px bg-zinc-800" />
                <div className="flex items-center gap-2 text-zinc-400">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className={s <= 4 ? "fill-lime-400 text-lime-400" : "text-zinc-700"} />)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">(4.8/5)</span>
                </div>
              </div>
            </div>

            <p className="text-zinc-400 text-lg mb-12 leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Selection Options */}
            <div className="space-y-12 mb-12">
              {/* Color Selector */}
              <div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-6 italic">Available Colors / {selectedColor}</span>
                <div className="flex gap-5">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 transition-all p-1 ${
                        selectedColor === color ? 'border-lime-400' : 'border-zinc-800 hover:border-zinc-500'
                      }`}
                      title={color}
                    >
                      <div className="w-full h-full rounded-full bg-zinc-800 border border-white/5" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">Select Size</span>
                  <button className="text-zinc-400 hover:text-white flex items-center gap-2 text-[10px] uppercase font-black tracking-widest transition-colors">
                    <Ruler size={14} className="text-lime-400" /> Size Chart
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-4 rounded-sm font-black text-xs transition-all border uppercase tracking-widest ${
                        selectedSize === size
                          ? 'bg-zinc-100 text-zinc-950 border-zinc-100'
                          : 'bg-transparent text-zinc-400 border-zinc-900 hover:border-zinc-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mb-16">
              <button
                onClick={handleAddToCart}
                className="w-full bg-lime-400 hover:bg-white text-zinc-950 font-black py-6 rounded-sm uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-lime-900/10"
              >
                <ShoppingBag size={20} />
                Add to Cart
              </button>
              
              {/* Explicit Amazon Button as requested */}
              <a
                href="https://amzn.in/d/8hEROr9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-6 rounded-sm uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-orange-950/20"
              >
                <ShoppingCart size={20} />
                Buy on Amazon
              </a>
            </div>

            {/* Product Tech Tabs */}
            <div className="border-t border-zinc-900 pt-10">
              <div className="flex gap-10 mb-8 border-b border-zinc-900 pb-4">
                <button
                  onClick={() => setActiveTab('fabric')}
                  className={`text-[10px] uppercase font-black tracking-widest transition-all relative ${
                    activeTab === 'fabric' ? 'text-zinc-100' : 'text-zinc-600'
                  }`}
                >
                  Apparel Science
                  {activeTab === 'fabric' && <motion.div layoutId="tab-underline" className="absolute -bottom-[18px] left-0 right-0 h-1 bg-lime-400" />}
                </button>
                <button
                  onClick={() => setActiveTab('fit')}
                  className={`text-[10px] uppercase font-black tracking-widest transition-all relative ${
                    activeTab === 'fit' ? 'text-zinc-100' : 'text-zinc-600'
                  }`}
                >
                  Ergonomics
                  {activeTab === 'fit' && <motion.div layoutId="tab-underline" className="absolute -bottom-[18px] left-0 right-0 h-1 bg-lime-400" />}
                </button>
              </div>
              <div className="text-zinc-500 text-sm leading-relaxed font-medium">
                {activeTab === 'fabric' ? (
                  <div className="space-y-4">
                    <p>{product.fabricDetails}</p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                       <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-400"><ShieldCheck size={14} className="text-lime-400"/> Fade Resistant</div>
                       <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-400"><Wind size={14} className="text-lime-400"/> Quick Dry</div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>{product.fitGuide}</p>
                    <p className="italic text-xs text-zinc-600 border-l-2 border-zinc-800 pl-4 uppercase tracking-widest">Engineered specifically for explosive gym movements.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Brand Promise Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 py-16 border-y border-zinc-900">
           <div className="flex flex-col items-center text-center">
             <Truck className="text-lime-400 mb-4" size={32} />
             <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-100 mb-2">Global Shipping</h5>
             <p className="text-zinc-500 text-xs">Fast delivery within 72 hours.</p>
           </div>
           <div className="flex flex-col items-center text-center">
             <RotateCcw className="text-lime-400 mb-4" size={32} />
             <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-100 mb-2">Easy Exchange</h5>
             <p className="text-zinc-500 text-xs">30-day hassle-free tracksuit returns.</p>
           </div>
           <div className="flex flex-col items-center text-center">
             <ShieldCheck className="text-lime-400 mb-4" size={32} />
             <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-100 mb-2">1 Year Warranty</h5>
             <p className="text-zinc-500 text-xs">Against any manufacturing defects.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
