import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      navigate('/payment-success');
    }, 2000); // Simulate a delay for payment processing
  };

  return (
    <Container className="payment-page">
      <h2>Payment Gateway</h2>
      <Form className="payment-form" onSubmit={handlePayment}>
        <Form.Group controlId="cardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="expiry">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="cvv">
          <Form.Label>CVV</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="cardName">
          <Form.Label>Cardholder Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter cardholder name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Pay Now
        </Button>
      </Form>
    </Container>
  );
};

export default PaymentPage;
