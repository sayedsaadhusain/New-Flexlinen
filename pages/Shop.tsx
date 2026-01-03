
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';
  const fitFilter = searchParams.get('fit') || 'All';
  const materialFilter = searchParams.get('material') || 'All';
  const styleFilter = searchParams.get('style') || 'All';
  const seasonFilter = searchParams.get('season') || 'All';
  
  const [sortBy, setSortBy] = useState<'featured' | 'low-high' | 'high-low'>('featured');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (categoryFilter !== 'All') result = result.filter(p => p.category === categoryFilter);
    if (fitFilter !== 'All') result = result.filter(p => p.fit === fitFilter);
    if (materialFilter !== 'All') result = result.filter(p => p.material === materialFilter);
    if (styleFilter !== 'All') result = result.filter(p => p.style === styleFilter);
    if (seasonFilter !== 'All') result = result.filter(p => p.season === seasonFilter);
    
    if (sortBy === 'low-high') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'high-low') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [categoryFilter, fitFilter, materialFilter, styleFilter, seasonFilter, sortBy]);

  const updateFilters = (newFilters: any) => {
    const params = new URLSearchParams(searchParams);
    Object.keys(newFilters).forEach(key => {
      if (newFilters[key] === 'All') {
        params.delete(key);
      } else {
        params.set(key, newFilters[key]);
      }
    });
    setSearchParams(params);
  };

  const clearAllFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-display uppercase text-zinc-100 mb-4 tracking-tighter italic">FlexLinen Store</h1>
          <p className="text-zinc-500 max-w-xl uppercase tracking-widest text-xs font-bold">Premium Gym Track Suits & Performance Sportswear</p>
        </header>

        {/* Dynamic Filters Bar */}
        <div className="flex flex-col gap-8 mb-16 border-b border-zinc-900 pb-12">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-zinc-100 font-bold uppercase tracking-widest text-xs">
              <SlidersHorizontal size={16} className="text-lime-400" />
              Filter By
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* Gender Filter */}
              <div className="relative group">
                <select 
                  value={categoryFilter}
                  onChange={(e) => updateFilters({ category: e.target.value })}
                  className="appearance-none bg-zinc-900 border border-zinc-800 text-zinc-100 px-5 py-3 pr-12 rounded-sm text-[10px] uppercase font-black tracking-widest outline-none focus:border-lime-400 transition-colors cursor-pointer"
                >
                  <option value="All">Category: All</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
              </div>

              {/* Fit Filter */}
              <div className="relative group">
                <select 
                  value={fitFilter}
                  onChange={(e) => updateFilters({ fit: e.target.value })}
                  className="appearance-none bg-zinc-900 border border-zinc-800 text-zinc-100 px-5 py-3 pr-12 rounded-sm text-[10px] uppercase font-black tracking-widest outline-none focus:border-lime-400 transition-colors cursor-pointer"
                >
                  <option value="All">Fit: All</option>
                  <option value="Slim Fit">Slim Fit</option>
                  <option value="Regular Fit">Regular Fit</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
              </div>

              {/* Material Filter */}
              <div className="relative group">
                <select 
                  value={materialFilter}
                  onChange={(e) => updateFilters({ material: e.target.value })}
                  className="appearance-none bg-zinc-900 border border-zinc-800 text-zinc-100 px-5 py-3 pr-12 rounded-sm text-[10px] uppercase font-black tracking-widest outline-none focus:border-lime-400 transition-colors cursor-pointer"
                >
                  <option value="All">Material: All</option>
                  <option value="Polyester">Polyester</option>
                  <option value="Cotton Blend">Cotton Blend</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
              </div>

              {/* Style Filter */}
              <div className="relative group">
                <select 
                  value={styleFilter}
                  onChange={(e) => updateFilters({ style: e.target.value })}
                  className="appearance-none bg-zinc-900 border border-zinc-800 text-zinc-100 px-5 py-3 pr-12 rounded-sm text-[10px] uppercase font-black tracking-widest outline-none focus:border-lime-400 transition-colors cursor-pointer"
                >
                  <option value="All">Style: All</option>
                  <option value="Zipper">Zipper</option>
                  <option value="Hooded">Hooded</option>
                  <option value="Full Sleeve">Full Sleeve</option>
                  <option value="Half Sleeve">Half Sleeve</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
              </div>

              {/* Season Filter */}
              <div className="relative group">
                <select 
                  value={seasonFilter}
                  onChange={(e) => updateFilters({ season: e.target.value })}
                  className="appearance-none bg-zinc-900 border border-zinc-800 text-zinc-100 px-5 py-3 pr-12 rounded-sm text-[10px] uppercase font-black tracking-widest outline-none focus:border-lime-400 transition-colors cursor-pointer"
                >
                  <option value="All">Season: All</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
               {(categoryFilter !== 'All' || fitFilter !== 'All' || materialFilter !== 'All' || styleFilter !== 'All' || seasonFilter !== 'All') && (
                 <button 
                   onClick={clearAllFilters}
                   className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-lime-400 bg-lime-400/5 px-4 py-2 border border-lime-400/20 rounded-sm"
                 >
                   <X size={12} /> Clear All Filters
                 </button>
               )}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Sort By</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-zinc-100 text-[10px] uppercase font-black tracking-widest outline-none cursor-pointer border-b border-zinc-800 pb-1"
              >
                <option value="featured">Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <h3 className="text-3xl font-display uppercase italic text-zinc-700 mb-6">No Track Suits Match Your Filters</h3>
            <button 
              onClick={clearAllFilters}
              className="bg-zinc-100 text-zinc-950 px-10 py-4 font-black uppercase tracking-widest hover:bg-lime-400 transition-all rounded-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
