import React, { useContext } from 'react';
import { ChevronRight } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { Heading } from '../components/UI';

export const MenuPage = React.memo(({ navigate }) => {
  const { setActiveItem } = useContext(CartContext);

  const MENU_SECTIONS = [
    {
      id: 'classics', title: 'The Classics',
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000',
      description: 'Time-honored roasts and traditional brewing methods.',
      items: [
        { id: 'm1', name: 'Espresso Single / Double', price: 4.00, desc: 'Rich, full-bodied espresso with a thick crema.' },
        { id: 'm2', name: 'Americano', price: 4.50, desc: 'Espresso cut with hot water for a smooth finish.' },
        { id: 'm3', name: 'Cappuccino', price: 4.50, desc: 'Equal parts espresso and hot water with thick foam.' },
        { id: 'm4', name: 'Latte', price: 5.50, desc: 'Espresso with steamed milk and a light layer of foam.' },
        { id: 'm5', name: 'Flat White', price: 5.50, desc: 'Ristretto with velvety microfoam.' },
        { id: 'm6', name: 'Cortado', price: 5.00, desc: 'Equal parts espresso and warm milk to reduce acidity.' }
      ]
    },
    {
      id: 'pastries', title: 'Artisan Pastries',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000',
      description: 'Baked fresh daily using organic, locally-sourced ingredients.',
      items: [
        { id: 'm7', name: 'Butter Croissant', price: 5.00, desc: 'Flaky, buttery, and baked to golden perfection.' },
        { id: 'm8', name: 'Almond Croissant', price: 6.50, desc: 'Filled with almond frangipane and topped with sliced almonds.' },
        { id: 'm9', name: 'Pain au Chocolat', price: 6.00, desc: 'Dark chocolate wrapped in buttery pastry dough.' },
        { id: 'm10', name: 'Pistachio Cruffin', price: 7.00, desc: 'Croissant-muffin hybrid filled with pure pistachio cream.' },
        { id: 'm11', name: 'Cardamom Knot', price: 5.50, desc: 'Sweet Scandinavian-style dough twisted with cardamom sugar.' }
      ]
    },
    {
      id: 'morning', title: 'Morning Rituals',
      image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=1000',
      description: 'Nourishing starts to your day, crafted with care.',
      items: [
        { id: 'm12', name: 'Truffle Omelette Toast', price: 18.00, desc: 'Sourdough toast topped with mixed cheese, omelette cooked with truffle mushroom.' },
        { id: 'm13', name: 'Avocado Brioche Bun', price: 16.00, desc: 'Soft brioche bun with fresh avocado guacamole, fluffy omelette, and truffle aioli.' },
        { id: 'm14', name: 'Gourmet Breakfast Sandwich', price: 15.00, desc: 'Lamb sausage, bacon, scrambled eggs, maple sriracha sauce.' },
        { id: 'm15', name: 'Signature Tierra Shakshuka', price: 19.00, desc: 'Tunisian spiced tomato sauce, poached eggs, feta cheese, served with sourdough.' },
        { id: 'm16', name: 'House Granola Bowl', price: 12.00, desc: 'Toasted oats, nuts, seeds, fresh berries, and thick Greek yogurt.' }
      ]
    },
    {
      id: 'signature', title: 'Signature Brews',
      image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=1000',
      description: 'Unique creations inspired by our olive and heritage roots.',
      items: [
        { id: 'm17', name: 'Tierra Signature Latte', price: 7.50, desc: 'Double espresso, oat milk, infused with a hint of olive leaf extract and raw agave.' },
        { id: 'm18', name: 'Wood-Roasted Pour Over', price: 8.00, desc: 'Single-origin Ethiopian beans roasted over olive wood chips for a smoky finish.' },
        { id: 'm19', name: 'Matcha Ceremonial Grade', price: 8.50, desc: 'Whisked to order. Sourced directly from Uji, Japan.' },
        { id: 'm20', name: 'Tierra Spiced Mocha', price: 7.00, desc: 'Rich dark chocolate, espresso, and a proprietary blend of warming spices.' },
        { id: 'm21', name: 'Olive Grove Cold Brew', price: 6.50, desc: 'Slow-steeped for 24 hours, exceptionally smooth and subtly sweet.' }
      ]
    }
  ];

  return (
    <div className="bg-[#F2F0E9] min-h-screen pt-20 md:pt-32 pb-20 md:pb-32 fade-up-enter">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-24 text-center border-b border-[#1C1C1C]/10 pb-8 md:pb-12 arch-grid">
        <Heading level={4}>Season 04</Heading>
        <Heading level={1} className="!mb-0">The Menu</Heading>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-40 arch-grid">
        {MENU_SECTIONS.map((section, index) => (
          <div key={section.id} className={`flex flex-col relative items-start gap-8 md:gap-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="w-full md:w-5/12 lg:w-1/2 sticky top-24 h-[40vh] md:h-[calc(100vh-8rem)] z-10 shadow-xl md:shadow-none rounded-2xl md:rounded-none overflow-hidden border border-[#1C1C1C]/5">
              <div className="w-full h-full relative overflow-hidden md:rounded-2xl shadow-[inset_0_0_30px_rgba(0,0,0,0.1)]">
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500" />
                <img src={section.image} loading="lazy" decoding="async" alt={section.title} className="w-full h-full object-cover -z-10" />
                <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                  <h2 className="text-[#F2F0E9] font-serif text-4xl md:text-5xl lg:text-7xl mb-4 leading-[0.9]">{section.title}</h2>
                  <p className="text-[#F2F0E9]/80 font-sans text-sm md:text-base max-w-sm font-light tracking-wide">{section.description}</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col gap-8 md:gap-12 z-20 bg-[#F2F0E9] md:bg-transparent pt-4 md:pt-0 relative">
              {section.items.map((item, itemIndex) => (
                <div key={item.id}
                  className="border-b border-[#1C1C1C]/10 pb-8 group cursor-pointer relative hover-trigger opacity-0"
                  style={{ animation: `fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`, animationDelay: `${itemIndex * 0.12}s` }}
                  onClick={() => setActiveItem({...item, image: section.image})}>
                  <div className="absolute -inset-6 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10 hidden md:block shadow-[0_4px_20px_rgba(0,0,0,0.03)]" />
                  <div className="flex justify-between items-end mb-3 relative z-10">
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1C1C1C] group-hover:text-[#3A4D39] transition-colors pr-4">{item.name}</h3>
                    <div className="flex-1 border-b border-dotted border-[#1C1C1C]/20 mb-2 mx-4 hidden md:block"></div>
                    <span className="font-serif text-xl md:text-2xl text-[#1C1C1C] whitespace-nowrap">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="font-sans text-[#666] text-sm md:text-base leading-relaxed max-w-md relative z-10 mb-6">{item.desc}</p>
                  <button className="relative z-10 text-[10px] uppercase tracking-[0.2em] font-bold text-[#1C1C1C] border-b border-[#1C1C1C] pb-1 group-hover:text-[#3A4D39] group-hover:border-[#3A4D39] transition-colors flex items-center gap-2">
                    Explore Details <ChevronRight size={10} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
