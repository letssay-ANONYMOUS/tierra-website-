import React from 'react';
import { APP_DATA } from '../data/constants';

export const Footer = React.memo(({ navigate }) => (
  <footer className="bg-[#1C1C1C] text-[#F2F0E9] pt-24 md:pt-40 pb-12 relative overflow-hidden">
    <div className="w-full overflow-hidden border-b border-[#F2F0E9]/5 pb-8 mb-16">
      <div className="animate-marquee flex gap-12 whitespace-nowrap transform-gpu">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="font-serif text-4xl md:text-6xl text-[#F2F0E9] opacity-20 italic flex items-center gap-12">
            A Sanctuary for the Senses <span className="w-4 h-4 rounded-full bg-[#C5A065] opacity-50"></span>
          </span>
        ))}
      </div>
    </div>
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#F2F0E9]/10 pb-16 md:pb-24 relative z-10">
      <div className="md:col-span-5 space-y-8 pr-8">
        <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C5A065]">The Philosophy</h4>
        <p className="text-[#F2F0E9]/60 font-light leading-relaxed text-lg">
          A sanctuary for the senses. Connecting the ancient wisdom of nature with the modern ritual of coffee. Sourced ethically. Poured deliberately.
        </p>
      </div>
      <div className="md:col-span-2 md:col-start-7">
        <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C5A065] mb-8">Sitemap</h4>
        <ul className="space-y-4 text-sm text-[#F2F0E9]/70 font-light">
          <li><button onClick={() => navigate('menu')} className="hover:text-white hover:translate-x-1 transition-all hover-trigger">Menu</button></li>
          <li><button onClick={() => navigate('locations')} className="hover:text-white hover:translate-x-1 transition-all hover-trigger">Locations</button></li>
          <li><button onClick={() => navigate('catering')} className="hover:text-white hover:translate-x-1 transition-all hover-trigger">Private Events</button></li>
          <li><button onClick={() => navigate('about')} className="hover:text-white hover:translate-x-1 transition-all hover-trigger">Our Journal</button></li>
        </ul>
      </div>
      <div className="md:col-span-3">
        <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C5A065] mb-8">Visit Us</h4>
        <ul className="space-y-4 text-sm text-[#F2F0E9]/70 font-light">
          <li>{APP_DATA.brand.address}</li>
          <li>Mon-Fri: {APP_DATA.hours.mon_fri}</li>
          <li>Sat-Sun: {APP_DATA.hours.sat_sun}</li>
          <li className="pt-4 text-white hover:text-[#C5A065] transition-colors cursor-pointer hover-trigger">{APP_DATA.brand.email}</li>
        </ul>
      </div>
    </div>
    <div className="w-full overflow-hidden mt-12 mb-4 flex justify-center opacity-10 select-none pointer-events-none">
      <span className="font-serif text-[18vw] leading-none whitespace-nowrap tracking-tighter">TIERRA</span>
    </div>
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-12 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.2em] text-[#F2F0E9]/40 relative z-10">
      <p>&copy; {new Date().getFullYear()} Tierra Hospitality.</p>
      <div className="flex gap-8 mt-4 md:mt-0">
        <span className="hover:text-white transition-colors cursor-pointer hover-trigger">Privacy</span>
        <span className="hover:text-white transition-colors cursor-pointer hover-trigger">Terms</span>
        <span className="hover:text-white transition-colors cursor-pointer hover-trigger">Instagram</span>
      </div>
    </div>
  </footer>
));
