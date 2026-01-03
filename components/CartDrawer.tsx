
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-zinc-950 border-l border-zinc-800 z-[110] flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
              <h2 className="text-xl font-bold font-display uppercase tracking-widest text-zinc-100 flex items-center gap-2">
                <ShoppingBag size={20} className="text-lime-400" />
                My Cart ({cart.length})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-700">
                    <ShoppingBag size={32} />
                  </div>
                  <p className="text-zinc-500">Your cart is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-zinc-100 font-bold border-b-2 border-lime-400 pb-1 uppercase tracking-widest text-sm"
                  >
                    Go Shop Now
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                    <div className="w-24 h-32 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-zinc-100 text-sm uppercase">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                          className="text-zinc-600 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-zinc-500 mb-2">Size: {item.selectedSize} / Color: {item.selectedColor}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-zinc-900 rounded-md px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, -1)} className="text-zinc-400 hover:text-white p-1">
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, 1)} className="text-zinc-400 hover:text-white p-1">
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-bold text-zinc-100">₹{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-zinc-900 border-t border-zinc-800 space-y-4">
                <div className="flex justify-between items-center text-zinc-100">
                  <span className="text-zinc-400 uppercase text-xs tracking-wider">Subtotal</span>
                  <span className="text-xl font-bold">₹{cartTotal.toLocaleString()}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-zinc-100 hover:bg-lime-400 text-zinc-950 font-bold py-4 rounded-md transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2 group"
                >
                  Checkout
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    →
                  </motion.span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
