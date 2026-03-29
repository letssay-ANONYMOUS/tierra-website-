import { useState, useCallback, useMemo, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const addToCart = useCallback((item, quantity = 1, notes = '') => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { ...item, quantity, notes }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const contextValue = useMemo(() => {
    const subtotal = cart.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);
    const total = subtotal * 1.08;
    return {
      cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, updateQuantity, clearCart,
      subtotal, total, activeItem, setActiveItem
    };
  }, [cart, isCartOpen, addToCart, removeFromCart, updateQuantity, clearCart, activeItem]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
