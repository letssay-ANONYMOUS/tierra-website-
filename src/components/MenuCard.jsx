import React, { useContext, useState, useEffect } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { Button } from './UI';

export const MenuCard = React.memo(({ item }) => {
  const { setActiveItem } = useContext(CartContext);
  return (
    <div
      onClick={() => setActiveItem(item)}
      className="group h-[380px] md:h-[420px] w-full cursor-pointer transform-gpu hover-trigger relative overflow-hidden bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#E5E0D8] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-700 rounded-sm flex flex-col"
    >
      <div className="h-[55%] relative overflow-hidden">
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.15)] z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-[#1C1C1C]/10 group-hover:bg-transparent transition-colors z-10" />
        <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 transform-gpu" />
        {item.tags && item.tags.length > 0 && (
          <div className="absolute top-4 left-4 z-30 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#1C1C1C]">
            {item.tags[0]}
          </div>
        )}
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1 relative bg-white">
        <div>
          <h3 className="font-serif text-xl md:text-2xl mb-2 text-[#1C1C1C] line-clamp-1 group-hover:text-[#3A4D39] transition-colors">{item.name}</h3>
          <p className="font-sans text-[11px] md:text-xs text-[#666] line-clamp-2 leading-relaxed font-light">{item.description || item.desc}</p>
        </div>
        <div className="flex justify-between items-end pt-4 mt-auto border-t border-[#F2F0E9]">
          <span className="font-serif text-lg md:text-xl text-[#3A4D39]">${Number(item.price).toFixed(2)}</span>
          <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#1C1C1C] flex items-center gap-1 group-hover:opacity-70 transition-opacity">
            Discover <ChevronRight size={10} />
          </span>
        </div>
      </div>
    </div>
  );
});

export const ItemModal = React.memo(() => {
  const { activeItem, setActiveItem, addToCart } = useContext(CartContext);
  const [displayItem, setDisplayItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (activeItem) {
      setDisplayItem(activeItem);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsOpen(true));
      });
    } else {
      setIsOpen(false);
      const timer = setTimeout(() => setDisplayItem(null), 700);
      return () => clearTimeout(timer);
    }
  }, [activeItem]);

  const handleClose = () => setActiveItem(null);
  const handleAdd = () => { addToCart(displayItem); handleClose(); };

  return (
    <div className={`fixed inset-0 z-[100] flex items-end md:items-center justify-center ${!isOpen && !displayItem ? 'pointer-events-none' : ''}`}>
      <div
        className={`absolute inset-0 bg-[#1C1C1C]/60 backdrop-blur-md transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={handleClose}
      />
      <div
        className={`relative w-full md:w-[480px] bg-[#F2F0E9] rounded-t-3xl md:rounded-2xl overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.2)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu flex flex-col max-h-[90vh] md:max-h-[85vh] will-change-transform ${isOpen ? 'translate-y-0 md:opacity-100 md:scale-100 pointer-events-auto' : 'translate-y-full md:translate-y-16 md:opacity-0 md:scale-95 pointer-events-none'}`}
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/50 rounded-full z-30 md:hidden" />
        <div className="relative h-64 md:h-80 w-full shrink-0">
          <img src={displayItem?.image} alt={displayItem?.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 to-transparent mix-blend-multiply" />
          <button onClick={handleClose} className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#1C1C1C] hover:scale-110 transition-transform">
            <X size={16} />
          </button>
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-1 overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-serif text-3xl text-[#1C1C1C] pr-4 leading-tight">{displayItem?.name}</h3>
            <span className="font-serif text-2xl text-[#3A4D39] shrink-0">${displayItem?.price?.toFixed(2)}</span>
          </div>
          {displayItem?.tags && displayItem.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {displayItem.tags.map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest bg-[#1C1C1C]/5 border border-[#1C1C1C]/10 px-3 py-1.5 rounded-full text-[#1C1C1C]/70 font-semibold">{tag}</span>
              ))}
            </div>
          )}
          <p className="font-sans text-sm md:text-base text-[#666] leading-relaxed font-light mb-8">
            {displayItem?.description || displayItem?.desc}
          </p>
          <div className="mt-auto pt-4">
            <Button className="w-full !py-5" onClick={handleAdd}>Add to Order • ${(displayItem?.price || 0).toFixed(2)}</Button>
          </div>
        </div>
      </div>
    </div>
  );
});
