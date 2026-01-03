
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CustomCursor from './components/CustomCursor';
import { CartProvider } from './context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

// Pages
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Checkout = lazy(() => import('./pages/Checkout'));

// Simple loading fallback
const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-zinc-950">
    <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <CustomCursor />
        <div className="flex flex-col min-h-screen relative">
          <Navbar />
          <CartDrawer />

          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                  <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
                  <Route path="/product/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
                  <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
                  <Route path="/about" element={<PageTransition><div className="pt-32 px-6 max-w-4xl mx-auto min-h-screen text-center"><h1 className="text-5xl font-display uppercase italic mb-8">Move with purpose.</h1><p className="text-zinc-400 text-lg leading-relaxed">FlexLinen started with a simple idea: that activewear should never sacrifice style for performance. Born in the heart of the fitness community, we craft gear for those who push their limits every day. Our mission is to empower movement through premium materials and uncompromising design.</p></div></PageTransition>} />
                  <Route path="/contact" element={<PageTransition><div className="pt-32 px-6 max-w-4xl mx-auto min-h-screen text-center"><h1 className="text-5xl font-display uppercase italic mb-8">Get in touch.</h1><p className="text-zinc-400 mb-8">We are here to help. Reach out to us via email or WhatsApp.</p><a href="mailto:support@flexlinen.com" className="text-2xl text-lime-400 hover:underline">support@flexlinen.com</a></div></PageTransition>} />
                  <Route path="/auth" element={<PageTransition><div className="pt-32 px-6 max-w-md mx-auto min-h-screen"><h2 className="text-3xl font-display uppercase mb-8 text-center italic">Welcome Back</h2><div className="space-y-4"><input className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-lg outline-none focus:border-lime-400" placeholder="Email" /><input className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-lg outline-none focus:border-lime-400" type="password" placeholder="Password" /><button className="w-full bg-zinc-100 text-zinc-950 font-bold py-4 rounded-lg uppercase tracking-widest">Sign In</button></div></div></PageTransition>} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>

          <Footer />

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919044268607?text=Hello%20FlexLinen%20Team!%20👋%0A%0AI%27m%20interested%20in%20your%20premium%20sportswear%20and%20would%20like%20to%20know%20more%20about%20available%20products,%20pricing,%20and%20delivery.%0A%0APlease%20assist%20me.%20Thank%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-90 group"
          >
            <MessageSquare size={28} />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-zinc-900 text-zinc-100 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Chat with us
            </span>
          </a>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
