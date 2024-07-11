import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, totalPrice, removeFromCart, updateCartQuantity }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/order-form');
  };

  const handleIncreaseQuantity = (index) => {
    updateCartQuantity(index, cart[index].quantity + 1);
  };

  const handleDecreaseQuantity = (index) => {
    if (cart[index].quantity > 1) {
      updateCartQuantity(index, cart[index].quantity - 1);
    }
  };

  return (
    <Container className="cart-page">
      <h2>My Cart</h2>
      <Row>
        {cart.map((product, index) => (
          <Col key={index} md={4}>
            <Card className="cart-item-card">
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  ₹{product.price.toLocaleString()} x {product.quantity}
                </Card.Text>
                <div className="quantity-control">
                  <Button variant="secondary" onClick={() => handleDecreaseQuantity(index)}>-</Button>
                  <span>{product.quantity}</span>
                  <Button variant="secondary" onClick={() => handleIncreaseQuantity(index)}>+</Button>
                </div>
                <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h3>Total Price: ₹{totalPrice.toLocaleString()}</h3>
      <Button variant="primary" onClick={handleCheckout}>Checkout</Button>
    </Container>
  );
};

export default Cart;
