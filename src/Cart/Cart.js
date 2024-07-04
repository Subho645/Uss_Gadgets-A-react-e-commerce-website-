import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, totalPrice, removeFromCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/order-form');
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
                <Card.Text>{product.price}</Card.Text>
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
