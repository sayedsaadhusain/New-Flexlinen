
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-zinc-900 rounded-sm overflow-hidden border border-zinc-900 transition-all duration-500 hover:border-lime-400/50"
    >
      <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] overflow-hidden bg-zinc-950">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
        />
        {product.isFeatured && (
          <div className="absolute top-4 left-4 bg-lime-400 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 z-10 skew-x-[-10deg]">
            New Drop
          </div>
        )}
        <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
           <div className="bg-zinc-100 text-zinc-950 px-6 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-lime-400 transition-colors">
             View Product
           </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{product.category} • {product.type}</p>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-bold text-zinc-100 hover:text-lime-400 transition-colors uppercase font-display leading-tight italic">{product.name}</h3>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-bold text-zinc-100">₹{product.price.toLocaleString()}</span>
          {product.amazonUrl && (
            <a 
              href={product.amazonUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-orange-500 transition-colors p-2"
              onClick={(e) => e.stopPropagation()}
              title="Shop on Amazon"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        
        <div className="flex gap-2 mt-4">
          {product.sizes.map(size => (
            <span key={size} className="text-[9px] text-zinc-500 border border-zinc-800 px-2 py-0.5 font-bold">
              {size}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
