
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [loading, setLoading] = useState(false);

  if (cart.length === 0 && !isOrdered) {
    return (
      <div className="h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Link to="/shop" className="bg-lime-400 text-zinc-950 px-8 py-3 rounded font-bold uppercase tracking-widest inline-block">Start Shopping</Link>
        </div>
      </div>
    );
  }

  const handlePayment = () => {
    setLoading(true);
    // Simulate Razorpay processing
    setTimeout(() => {
      setLoading(false);
      setIsOrdered(true);
      clearCart();
    }, 2000);
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-lime-400 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 size={48} className="text-zinc-950" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black font-display uppercase italic mb-4">Order Confirmed!</h1>
        <p className="text-zinc-400 text-lg mb-8 max-w-md">Thank you for choosing FlexLinen. Your workout gear is being prepared for dispatch.</p>
        <Link to="/" className="bg-zinc-100 text-zinc-950 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-lime-400 transition-colors">
          Continue Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <button onClick={() => navigate(-1)} className="text-zinc-400 hover:text-zinc-100 flex items-center gap-2">
            <ArrowLeft size={20} /> Back
          </button>
          <h1 className="text-3xl font-bold font-display uppercase tracking-widest italic">Secure Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Address Form */}
            <section className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
              <h2 className="text-xl font-bold font-display uppercase mb-6 tracking-widest text-zinc-100">Shipping Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 focus:border-lime-400 outline-none text-zinc-100" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 focus:border-lime-400 outline-none text-zinc-100" placeholder="Enter last name" />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 focus:border-lime-400 outline-none text-zinc-100" placeholder="your@email.com" />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Delivery Address</label>
                  <textarea rows={3} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 focus:border-lime-400 outline-none text-zinc-100 resize-none" placeholder="Flat No, Street, Landmark" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">City</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 focus:border-lime-400 outline-none text-zinc-100" placeholder="City" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Pincode</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 focus:border-lime-400 outline-none text-zinc-100" placeholder="6-digit PIN" />
                </div>
              </div>
            </section>

            {/* Payment Options */}
            <section className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
              <h2 className="text-xl font-bold font-display uppercase mb-6 tracking-widest text-zinc-100">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-zinc-950 border-2 border-lime-400 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 border-4 border-lime-400 rounded-full flex items-center justify-center p-1">
                      <div className="w-full h-full bg-lime-400 rounded-full" />
                    </div>
                    <span className="font-bold text-zinc-100">Razorpay (UPI / Cards / NetBanking)</span>
                  </div>
                  <CreditCard size={20} className="text-lime-400" />
                </div>
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden sticky top-32">
              <div className="p-6 border-b border-zinc-800">
                <h2 className="text-xl font-bold font-display uppercase tracking-widest italic">Order Summary</h2>
              </div>
              <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
                {cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className="w-12 h-16 bg-zinc-950 rounded overflow-hidden flex-shrink-0">
                        <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-100 uppercase">{item.name}</h4>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Qty: {item.quantity} / {item.selectedSize}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-zinc-100">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-zinc-950 space-y-3">
                <div className="flex justify-between text-zinc-500 text-sm">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-500 text-sm">
                  <span>Shipping</span>
                  <span className="text-lime-400 uppercase font-bold text-xs tracking-widest">Free</span>
                </div>
                <div className="border-t border-zinc-800 my-4 pt-4 flex justify-between">
                  <span className="font-bold text-zinc-100 uppercase tracking-widest">Grand Total</span>
                  <span className="text-2xl font-black text-zinc-100">₹{cartTotal.toLocaleString()}</span>
                </div>
                <button
                  disabled={loading}
                  onClick={handlePayment}
                  className="w-full bg-zinc-100 hover:bg-lime-400 text-zinc-950 font-bold py-5 rounded-full uppercase tracking-widest text-sm transition-all active:scale-95 disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Pay with Razorpay'}
                </button>
                <div className="flex items-center justify-center gap-2 text-zinc-600 text-[10px] uppercase tracking-widest pt-4">
                  <ShieldCheck size={14} /> 256-bit SSL Secure Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
