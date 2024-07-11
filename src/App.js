import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import MobilePage from './pages/MobilePage';
import LaptopTabsPage from './pages/LaptopTabsPage';
import SmartWatchPage from './pages/SmartWatchPage';
import CameraPage from './pages/CameraPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cart from './Cart/Cart';
import OrderForm from './Cart/OrderForm';
import PaymentPage from './Cart/PaymentPage';
import PaymentSuccess from './Cart/PaymentSuccess';

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.name === product.name);

    if (existingProductIndex !== -1) {
      updateCartQuantity(existingProductIndex, cart[existingProductIndex].quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setTotalPrice(totalPrice + parseInt(product.price.replace('₹', '').replace(',', '').replace(',', '')));
    }
  };

  const updateCartQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    const productPrice = parseInt(updatedCart[index].price.replace('₹', '').replace(',', '').replace(',', ''));
    const priceDifference = (newQuantity - updatedCart[index].quantity) * productPrice;
    
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    setTotalPrice(totalPrice + priceDifference);
  };

  const removeFromCart = (index) => {
    const productToRemove = cart[index];
    setCart(cart.filter((_, i) => i !== index));
    setTotalPrice(totalPrice - parseInt(productToRemove.price.replace('₹', '').replace(',', '').replace(',', '')));
  };

  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <Router>
      <Navbar cart={cart} totalPrice={totalPrice} />
      <Routes>
        <Route path="/mobile" element={<MobilePage addToCart={addToCart} />} />
        <Route path="/laptop-tabs" element={<LaptopTabsPage addToCart={addToCart} />} />
        <Route path="/smart-watch" element={<SmartWatchPage addToCart={addToCart} />} />
        <Route path="/camera" element={<CameraPage addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} totalPrice={totalPrice} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} />} />
        <Route path="/order-form" element={<OrderForm clearCart={clearCart} totalPrice={totalPrice} />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
