import React, { useContext, useState } from 'react';
import { CreditCard } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { Button } from '../components/UI';

export const CheckoutPage = React.memo(({ navigate }) => {
  const { cart, subtotal, total, clearCart } = useContext(CartContext);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', tips: 0 });

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate order placement
    setTimeout(() => {
      setStep(3);
      clearCart();
      setLoading(false);
    }, 1500);
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="pt-40 pb-20 text-center max-w-md mx-auto px-6 fade-up-enter">
        <h2 className="font-serif text-4xl mb-6">Your bag is empty</h2>
        <Button onClick={() => navigate('menu')}>Return to Menu</Button>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 min-h-screen bg-[#F2F0E9] fade-up-enter">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 arch-grid">
        <div className="md:col-span-4 md:order-2">
          <div className="bg-white p-6 md:p-8 sticky top-24 md:top-32 shadow-sm border border-[#E5E0D8]">
            <h3 className="font-serif text-2xl mb-6">Summary</h3>
            <div className="space-y-4 mb-6 text-sm">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#F2F0E9] pt-4 flex justify-between font-serif text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 md:order-1">
          {step === 1 && (
            <form onSubmit={() => setStep(2)} className="space-y-8">
              <h2 className="font-serif text-5xl mb-8">Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#666]">Name</label>
                  <input required className="w-full bg-white border border-[#E5E0D8] p-4 focus:outline-none focus:border-[#3A4D39]" onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#666]">Email</label>
                  <input required type="email" className="w-full bg-white border border-[#E5E0D8] p-4 focus:outline-none focus:border-[#3A4D39]" onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <Button type="submit">Continue to Payment</Button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              <h2 className="font-serif text-5xl mb-8">Payment</h2>
              <div className="bg-white p-6 md:p-8 border border-[#E5E0D8] space-y-6">
                <div className="flex items-center gap-3 mb-4 text-[#3A4D39]">
                  <CreditCard className="w-5 h-5" />
                  <span className="text-sm font-medium">Credit Card (Secure)</span>
                </div>
                <input placeholder="Card Number" className="w-full bg-[#F2F0E9] p-4 text-sm outline-none" />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="MM/YY" className="w-full bg-[#F2F0E9] p-4 text-sm outline-none" />
                  <input placeholder="CVC" className="w-full bg-[#F2F0E9] p-4 text-sm outline-none" />
                </div>
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
              </Button>
            </form>
          )}
          {step === 3 && (
            <div className="text-center py-20">
              <h2 className="font-serif text-5xl mb-6">Confirmed</h2>
              <p className="text-[#666] mb-8">Order #2049. See you soon.</p>
              <Button onClick={() => navigate('home')}>Return Home</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
