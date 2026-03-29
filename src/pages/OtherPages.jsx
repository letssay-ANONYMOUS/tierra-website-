import React from 'react';
import { Coffee, Utensils, Star } from 'lucide-react';
import { APP_DATA } from '../data/constants';
import { Section, Heading, Button } from '../components/UI';

export const LocationsPage = React.memo(() => (
  <div className="pt-24 md:pt-32 min-h-screen bg-[#F2F0E9] fade-up-enter">
    <Section>
      <div className="text-center mb-16 md:mb-24">
        <Heading level={4}>Sanctuaries</Heading>
        <Heading level={1}>Our Locations</Heading>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {APP_DATA.locations.map(loc => (
          <div key={loc.id} className="group cursor-pointer hover-trigger">
            <div className="h-[400px] md:h-[600px] overflow-hidden mb-8 relative border border-[#1C1C1C]/10 p-2 bg-white">
              <img src={loc.image} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" alt={loc.name} />
            </div>
            <h3 className="font-serif text-4xl mb-2 text-[#1C1C1C]">{loc.name}</h3>
            <p className="font-sans text-sm text-[#666] mb-6 tracking-widest uppercase">{loc.address}</p>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-[#1C1C1C] pb-1 group-hover:text-[#3A4D39] group-hover:border-[#3A4D39] transition-colors">View Details</span>
          </div>
        ))}
      </div>
      <div className="w-full h-[400px] md:h-[500px] relative border border-[#1C1C1C]/10 bg-white p-2 shadow-xl transform-gpu hover-trigger group">
        <div className="w-full h-full relative overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.1)] bg-[#EBE8E1]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6617949390234!2d-99.16527582494924!3d19.427024440860882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sRoma%20Norte.%2C%20Mexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1709849202111!5m2!1sen!2sus"
            width="100%" height="100%"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) opacity(0.8)' }}
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 bg-[#1C1C1C]/5 pointer-events-none transition-colors duration-500 group-hover:bg-transparent"></div>
        </div>
      </div>
    </Section>
  </div>
));

export const CateringPage = React.memo(({ navigate }) => (
  <div className="fade-up-enter bg-[#F2F0E9]">
    <div className="relative h-[60vh] md:h-[80vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=2000" alt="Catering Table Spread" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
        <span className="font-sans text-[10px] md:text-xs text-[#F2F0E9] uppercase tracking-[0.4em] mb-6 animate-pulse">Private Dining & Events</span>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-[#F2F0E9] mb-8 leading-[0.8] tracking-tighter">Elevate Every <br/> Occasion</h1>
        <p className="font-sans text-sm md:text-base text-[#F2F0E9]/80 max-w-md tracking-wider leading-relaxed font-light mt-4">
          From intimate gatherings to grand celebrations, bring the sanctuary of Tierra to your table.
        </p>
      </div>
    </div>
    <div className="bg-[#1C1C1C] text-[#F2F0E9] py-24 md:py-40 min-h-[50vh] border-t border-[#C5A065]">
      <div className="max-w-[1400px] mx-auto px-6 text-center mb-16 md:mb-24 arch-grid">
        <Heading level={4} className="text-[#C5A065]">Exclusivity</Heading>
        <Heading level={2} className="!text-[#F2F0E9] !text-5xl md:!text-7xl">Curated Gatherings</Heading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px px-6 max-w-[1400px] mx-auto bg-[#F2F0E9]/10">
        {[
          { icon: Coffee, title: "Coffee Service", price: "$45 / box" },
          { icon: Utensils, title: "Morning Spread", price: "$18 / person" },
          { icon: Star, title: "Private Hosting", price: "Custom" }
        ].map((item, i) => (
          <div key={i} className="aspect-square bg-[#1C1C1C] hover:bg-[#262626] transition-colors flex flex-col items-center justify-center p-8 text-center group hover-trigger">
            <item.icon className="w-10 h-10 mb-8 text-[#C5A065] group-hover:scale-110 transition-transform" />
            <h3 className="font-serif text-3xl mb-4">{item.title}</h3>
            <p className="font-sans text-[10px] opacity-50 uppercase tracking-[0.2em]">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-20 md:mt-32">
        <Button variant="white" onClick={() => navigate('contact')}>Request Consultation</Button>
      </div>
    </div>
  </div>
));

export const AboutPage = React.memo(({ navigate }) => (
  <div className="fade-up-enter bg-[#F2F0E9]">
    <div className="relative h-[60vh] md:h-[80vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2000" alt="Coffee Extraction" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
        <span className="font-sans text-[10px] md:text-xs text-[#F2F0E9] uppercase tracking-[0.4em] mb-6 animate-pulse">Our Journal</span>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] text-[#F2F0E9] mb-8 leading-[0.8] tracking-tighter">Crafted <br/> Perspectives</h1>
      </div>
    </div>
    <Section className="!pt-24 md:!pt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
        <div className="lg:col-span-5 z-10">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] mb-8 md:mb-12 text-[#1C1C1C] leading-[0.8] tracking-tighter">The Art <br/> of Slow.</h1>
          <div className="w-24 h-[1px] bg-[#3A4D39] mb-8 md:mb-12"></div>
          <p className="text-lg md:text-xl font-light leading-relaxed text-[#1C1C1C]/70 mb-8">
            Tierra was born from a desire to reconnect with the earth in the middle of the city. 'Tierra' (Earth) represents grounding and longevity, serving as a sanctuary for the senses.
          </p>
        </div>
        <div className="lg:col-span-7 relative">
          <div className="aspect-[4/5] relative z-10 p-4 border border-[#1C1C1C]/10 bg-white shadow-xl">
            <div className="w-full h-full relative overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.1)]">
              <img src="https://images.unsplash.com/photo-1507133750069-bef72f3707a9?auto=format&fit=crop&q=80&w=1200" loading="lazy" decoding="async" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 -z-10" alt="Barista" />
            </div>
          </div>
          <div className="absolute -bottom-8 left-4 md:bottom-12 md:-left-12 bg-white p-6 border border-[#1C1C1C]/10 shadow-2xl z-20 max-w-[200px]">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A065] block mb-2">Our Origins</span>
            <p className="font-serif text-sm text-[#1C1C1C]">Established in MMXXIV to honor the craft.</p>
          </div>
        </div>
      </div>
    </Section>
  </div>
));
