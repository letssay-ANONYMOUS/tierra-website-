import React from 'react';
import { ArrowDown, Leaf, MoveRight } from 'lucide-react';
import { Section, Heading, Button } from '../components/UI';
import { MenuCard } from '../components/MenuCard';

export const HomePage = React.memo(({ navigate, menuItems }) => (
  <div className="fade-up-enter bg-[#F2F0E9]">
    {/* Hero */}
    <div className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none mix-blend-multiply" />
      <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" alt="Tierra Interior" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 text-center">
        <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 md:mb-8 text-[#F2F0E9] opacity-90 animate-fade-in-up">Tierra</span>
        <h1 className="font-serif text-[18vw] md:text-[15vw] leading-none text-[#F2F0E9] tracking-tighter opacity-0 animate-slide-up drop-shadow-2xl" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Sanctuary</h1>
      </div>
      <div className="absolute bottom-12 z-30 opacity-0 animate-fade-in flex flex-col items-center gap-4" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
        <div className="flex items-center gap-3 text-[#F2F0E9] cursor-pointer hover:opacity-70 transition-opacity hover-trigger" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">Discover</span>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center animate-bounce">
            <ArrowDown className="w-3 h-3 md:w-4 md:h-4" />
          </div>
        </div>
      </div>
    </div>

    {/* Tierra Reserve Section */}
    <Section className="bg-white relative overflow-hidden !py-24 md:!py-40 border-b border-[#1C1C1C]/5">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        <div className="w-full lg:w-5/12 relative group">
          <div className="aspect-[3/4] p-3 md:p-5 border border-[#1C1C1C]/10 bg-white shadow-sm relative z-10 transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <div className="w-full h-full relative overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.1)]">
              <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800" loading="lazy" decoding="async" className="w-full h-full object-cover transition-all duration-1000 -z-10" alt="Reserve Pour"/>
            </div>
          </div>
          <span className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 rotate-180 text-[10px] tracking-[0.4em] text-[#1C1C1C]/40 uppercase vertical-text whitespace-nowrap z-0">Exhibit 01 — The Tierra Reserve</span>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#EBE8E1] rounded-full -z-10 blur-2xl opacity-60"></div>
        </div>
        <div className="w-full lg:w-7/12">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A065] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A065]"></span>
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#C5A065] uppercase font-bold">Live Allocation: 3 Pours Remaining</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] text-[#1C1C1C] tracking-tight">The Tierra <br/> Reserve.</h2>
          <p className="font-light font-sans text-[#666] text-base md:text-lg mb-10 leading-relaxed max-w-xl">
            A curated exhibition of our most sought-after harvests. Sourced from micro-lots and roasted over ancient wood. <span className="font-serif italic text-[#1C1C1C]">Only 12 pours available daily.</span> Hand-stamped and sealed for the discerning palate.
          </p>
          <Button variant="secondary" onClick={() => navigate('menu')}>Inquire Availability</Button>
        </div>
      </div>
    </Section>

    {/* Elements Carousel */}
    <div className="py-16 md:py-32 border-b border-[#1C1C1C]/5 overflow-hidden bg-[#F2F0E9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#1C1C1C]/10 pb-8 arch-grid">
        <div>
          <Heading level={4}>The Elements</Heading>
          <Heading level={2} className="!mb-0">Crafted by Nature</Heading>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-6 md:mt-0">
          <p className="hidden md:block font-serif text-xl italic text-[#1C1C1C]/60 pb-2">Nature is our only ingredient.</p>
          <div className="md:hidden flex items-center gap-2 text-[#C5A065] animate-pulse">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Swipe to explore</span>
            <MoveRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="flex gap-6 md:gap-12 overflow-x-auto px-6 md:px-12 pb-12 no-scrollbar snap-x snap-mandatory cursor-grab" style={{ scrollBehavior: 'smooth' }}>
        {[
          { title: "Ancient Olive", img: "https://images.unsplash.com/photo-1471180625745-944903837c22?auto=format&fit=crop&q=80&w=600", desc: "Sourced from 100-year old groves." },
          { title: "Heritage Wood", img: "/wood-texture.png", desc: "Reclaimed timber interiors." },
          { title: "Single Origin", img: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?auto=format&fit=crop&q=80&w=600", desc: "Roasted in small batches." }
        ].map((item, i) => (
          <div key={i} className="flex-shrink-0 w-72 md:w-96 snap-center group hover-trigger">
            <div className="aspect-[4/5] rounded-t-full overflow-hidden mb-8 relative border border-[#1C1C1C]/5 shadow-sm">
              <div className="absolute inset-0 bg-[#1C1C1C]/10 group-hover:bg-transparent transition-colors z-10" />
              <img src={item.img} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt={item.title} />
            </div>
            <h3 className="font-serif text-3xl text-center text-[#1C1C1C]">{item.title}</h3>
            <p className="text-center text-[10px] uppercase tracking-widest text-[#666] mt-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Ritual Section */}
    <section className="py-24 md:py-40 bg-[#1C1C1C] text-[#F2F0E9] relative overflow-hidden border-y border-[#1C1C1C]">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 font-serif text-[25vw] leading-none opacity-[0.02] pointer-events-none select-none">BREATHE</div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center arch-grid border-x-white/5">
        <div className="lg:col-span-5 relative z-10">
          <Leaf className="w-10 h-10 mb-8 text-[#3A4D39]" />
          <Heading level={2} className="!text-[#F2F0E9] !text-4xl md:!text-6xl">Not just coffee. <br/> A daily ritual.</Heading>
          <div className="w-16 h-[1px] bg-[#3A4D39] mb-8"></div>
          <p className="font-light text-base md:text-lg opacity-60 leading-relaxed mb-12">
            We believe that what you consume becomes a part of you. That's why every bean is traceable, every pastry is handmade, and every corner of our space is designed to help you exhale.
          </p>
          <Button variant="white" onClick={() => navigate('about')}>Read Our Journal</Button>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 relative mt-12 lg:mt-0 hover-trigger">
          <div className="aspect-[3/4] overflow-hidden rounded-sm relative z-10 p-2 md:p-3 border border-[#F2F0E9]/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Pour over" />
          </div>
          <div className="absolute -bottom-8 -left-8 md:-bottom-16 md:-left-16 w-40 h-40 md:w-64 md:h-64 overflow-hidden rounded-full border border-[#F2F0E9]/30 p-2 bg-[#1C1C1C] z-20 animate-float shadow-2xl hidden md:block pointer-events-none">
            <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=600" loading="lazy" decoding="async" className="w-full h-full object-cover rounded-full" alt="Detail" />
          </div>
        </div>
      </div>
    </section>

    {/* Signature Selections */}
    <Section className="bg-[#F2F0E9] !py-24 md:!py-40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-[#1C1C1C]/10 pb-8">
        <div>
          <Heading level={4}>Curated For You</Heading>
          <Heading level={2} className="!mb-0">Signature Selections</Heading>
        </div>
        <Button variant="primary" className="hidden md:flex" onClick={() => navigate('menu')}>View Full Menu</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {menuItems.slice(0, 3).map(item => <MenuCard key={item.id} item={item} />)}
      </div>
      <div className="mt-12 text-center md:hidden">
        <Button variant="primary" onClick={() => navigate('menu')}>View Full Menu</Button>
      </div>
    </Section>
  </div>
));
