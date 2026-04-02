import React, { useContext, useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu, X, Leaf } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { Button } from './UI';

const SwipeableCartItem = React.memo(({ item, updateQuantity, removeFromCart }) => {
  const itemRef = useRef(null);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const isDragging = useRef(false);
  const threshold = -80;

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    isDragging.current = true;
    if (itemRef.current) itemRef.current.style.transition = 'none';
  };
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.touches[0].clientX - startXRef.current;
    currentXRef.current = diff < 0 ? (diff < threshold ? threshold + (diff - threshold) * 0.2 : diff) : 0;
    if (itemRef.current) requestAnimationFrame(() => { if (itemRef.current) itemRef.current.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`; });
  };
  const handleTouchEnd = () => {
    isDragging.current = false;
    let finalX = currentXRef.current < threshold * 0.6 ? threshold : 0;
    if (itemRef.current) requestAnimationFrame(() => { if (itemRef.current) { itemRef.current.style.transition = 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)'; itemRef.current.style.transform = `translate3d(${finalX}px, 0, 0)`; } });
    currentXRef.current = finalX;
  };

  return (
    <div className="relative overflow-hidden fade-up-enter rounded-xl mb-4 bg-[#F2F0E9] shadow-sm border border-[#1C1C1C]/5 transform-gpu">
      <div className="absolute inset-y-0 right-0 w-[80px] bg-red-600/90 flex flex-col items-center justify-center text-white cursor-pointer hover-trigger" onClick={() => removeFromCart(item.id)}>
        <X className="w-5 h-5 mb-1" /><span className="text-[9px] font-bold tracking-widest uppercase">Delete</span>
      </div>
      <div ref={itemRef} className="relative bg-[#F2F0E9] flex gap-4 md:gap-6 z-10 w-full transform-gpu" style={{ transform: 'translate3d(0px, 0, 0)' }} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <img src={item.image} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg pointer-events-none" />
        <div className="flex-1 flex flex-col justify-center py-1">
          <div>
            <div className="flex justify-between items-start mb-1 pr-4">
              <h3 className="font-serif text-base md:text-lg text-[#1C1C1C] line-clamp-1">{item.name}</h3>
              <p className="font-sans font-medium text-sm">${(Number(item.price) * item.quantity).toFixed(2)}</p>
            </div>
            {item.notes && <p className="text-[10px] md:text-xs text-[#666] italic">"{item.notes}"</p>}
          </div>
          <div className="flex items-center justify-between mt-auto pr-4">
            <div className="flex items-center border border-[#1C1C1C]/20 px-2 py-1 rounded-sm">
              <button onClick={() => updateQuantity(item.id, -1)} className="text-[#1C1C1C] hover:opacity-50 transition w-4 flex justify-center hover-trigger">-</button>
              <span className="mx-3 text-xs font-medium">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="text-[#1C1C1C] hover:opacity-50 transition w-4 flex justify-center hover-trigger">+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="hidden md:block text-[10px] uppercase tracking-widest text-[#1C1C1C]/60 hover:text-red-600 transition-colors border-b border-transparent hover:border-red-600 hover-trigger">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export const Navbar = React.memo(({ navigate }) => {
  const { cart, setIsCartOpen } = useContext(CartContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
          setIsScrolled(prev => prev !== scrolled ? scrolled : prev);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', page: 'menu' },
    { label: 'Locations', page: 'locations' },
    { label: 'Catering', page: 'catering' },
    { label: 'Journal', page: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 flex justify-center z-[60] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${isScrolled ? 'pt-4 px-4 md:pt-6' : 'pt-4 md:pt-6 px-4 md:px-6'}`} style={{ willChange: 'transform, padding' }}>
      <div className={`w-full flex items-center justify-between relative z-[60] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${isScrolled ? 'max-w-[1000px] h-16 frosted-pill px-8' : 'max-w-[1400px] h-20 md:h-24 px-6 md:px-12 bg-transparent border-transparent'}`}>
        <div onClick={() => navigate('home')} className="cursor-pointer flex items-center gap-3 flex-shrink-0 group hover-trigger ml-1 md:ml-6 lg:ml-8">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ${isScrolled ? 'bg-[#3A4D39] group-hover:bg-[#1C1C1C]' : 'bg-white group-hover:scale-110'}`}>
            <Leaf className={`w-4 h-4 transition-colors ${isScrolled ? 'text-white' : 'text-[#3A4D39]'}`} />
          </div>
          <span className={`font-serif text-xl tracking-tight font-medium transition-colors duration-500 ${isScrolled ? 'text-[#1C1C1C]' : 'text-white mix-blend-difference'}`}>Tierra</span>
        </div>
        <div className="hidden lg:flex flex-row flex-nowrap items-center gap-6 xl:gap-10">
          {navLinks.map(link => (
            <button key={link.label} onClick={() => navigate(link.page)}
              className={`relative text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-100 opacity-80 whitespace-nowrap group hover-trigger ${isScrolled ? 'text-[#1C1C1C]' : 'text-white mix-blend-difference'}`}>
              {link.label}
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[#3A4D39]' : 'bg-white'}`}></span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0 mr-1 md:mr-6 lg:mr-8">
          <button onClick={() => setIsCartOpen(true)} className={`relative p-2 rounded-full transition-all duration-300 hover-trigger ${isScrolled ? 'hover:bg-black/10 text-[#1C1C1C]' : 'hover:bg-white/20 text-white mix-blend-difference'}`}>
            <ShoppingBag className="w-5 h-5 transition-transform hover:scale-110" />
            {cart.length > 0 && <span className="absolute top-0 right-0 w-2 h-2 bg-[#C5A065] rounded-full animate-pulse shadow-[0_0_8px_rgba(197,160,101,0.8)]" />}
          </button>
          <button className={`lg:hidden p-2 rounded-full transition-all duration-300 hover-trigger ${isScrolled ? 'text-[#1C1C1C] hover:bg-black/10' : 'text-white mix-blend-difference hover:bg-white/20'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6 transition-transform rotate-90" /> : <Menu className="w-6 h-6 transition-transform hover:scale-110" />}
          </button>
        </div>
      </div>
      <div className={`lg:hidden absolute left-4 right-4 mt-4 bg-white/95 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[55] transform-gpu ${isMobileMenuOpen ? 'max-h-[400px] py-8 opacity-100 translate-y-0' : 'max-h-0 py-0 opacity-0 -translate-y-4 border-transparent'}`}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <button key={link.label} onClick={() => { navigate(link.page); setIsMobileMenuOpen(false); }}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={`font-serif text-3xl text-[#1C1C1C] hover:italic transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
});

export const CartDrawer = React.memo(({ navigate }) => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal } = useContext(CartContext);
  return (
    <div className={`fixed inset-0 z-[60] flex justify-end transition-all duration-700 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-[#1C1C1C]/40 backdrop-blur-sm transition-opacity duration-700 transform-gpu ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsCartOpen(false)} style={{ willChange: 'opacity' }} />
      <div className={`relative w-full max-w-md bg-[#F2F0E9] h-full shadow-2xl flex flex-col transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform-gpu ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ willChange: 'transform' }}>
        <div className="p-8 flex items-center justify-between border-b border-[#E5E0D8]">
          <h2 className="font-serif text-3xl text-[#1C1C1C]">The Reserve</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:rotate-90 transition-transform duration-500 text-[#1C1C1C] hover-trigger"><X className="w-6 h-6" /></button>
        </div>
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6 md:p-8 custom-scrollbar relative">
          {cart.length === 0 ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-40">
              <span className="font-serif text-xl italic mb-6">Awaiting your selection.</span>
              <Button variant="secondary" onClick={() => { setIsCartOpen(false); navigate('menu'); }}>Explore The Menu</Button>
            </div>
          ) : (
            cart.map(item => <SwipeableCartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />)
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-8 bg-white border-t border-[#E5E0D8] shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10">
            <div className="flex justify-between mb-6 items-end">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#666]">Subtotal (Excl. Tax)</span>
              <span className="font-serif text-2xl text-[#1C1C1C]">${subtotal.toFixed(2)}</span>
            </div>
            <Button className="w-full" onClick={() => { setIsCartOpen(false); navigate('checkout'); }}>Complete Reservation</Button>
          </div>
        )}
      </div>
    </div>
  );
});
