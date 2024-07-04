import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './ProductPage.css';

const products = [
  {
    id: 1,
    name: 'Apple Watch Series 7',
    description: 'Advanced health monitoring and fitness tracking',
    price: '₹39,999',
    imageUrl: require('../Components/Assets/product_19.jpeg'),
    detailedDescription: 'The Apple Watch Series 7 offers advanced health monitoring features such as ECG and blood oxygen sensors, along with comprehensive fitness tracking capabilities. Its larger display and fast charging make it the best smartwatch for iPhone users.',
    rating: 4.8,
    reviews: 450
  },
  {
    id: 2,
    name: 'Samsung Galaxy Watch 4',
    description: 'Comprehensive health tracking and sleek design',
    price: '₹29,999',
    imageUrl: require('../Components/Assets/product_20.jpeg'),
    detailedDescription: 'The Samsung Galaxy Watch 4 provides a complete suite of health tracking features, including body composition analysis, sleep tracking, and ECG monitoring. Its sleek design and integration with the Galaxy ecosystem make it a top choice for Android users.',
    rating: 4.7,
    reviews: 400
  },
  {
    id: 3,
    name: 'Garmin Fenix 6',
    description: 'Rugged multisport GPS watch',
    price: '₹49,999',
    imageUrl: require('../Components/Assets/product_21.jpg'),
    detailedDescription: 'The Garmin Fenix 6 is a rugged multisport GPS watch designed for serious athletes and adventurers. It features advanced performance metrics, topo maps, and a long battery life, making it perfect for outdoor activities and sports.',
    rating: 4.9,
    reviews: 350
  },
  {
    id: 4,
    name: 'Fitbit Versa 3',
    description: 'Health and fitness smartwatch with GPS',
    price: '₹19,999',
    imageUrl: require('../Components/Assets/product_22.jpeg'),
    detailedDescription: 'The Fitbit Versa 3 offers built-in GPS, heart rate monitoring, and comprehensive health and fitness tracking. With its long battery life and integration with the Fitbit app, it’s an excellent choice for anyone looking to stay active and healthy.',
    rating: 4.5,
    reviews: 300
  },
  {
    id: 5,
    name: 'Amazfit GTS 2',
    description: 'Stylish and feature-packed smartwatch',
    price: '₹12,999',
    imageUrl: require('../Components/Assets/product_23.jpeg'),
    detailedDescription: 'The Amazfit GTS 2 combines style with a wide range of features, including SpO2 monitoring, music storage, and a vibrant AMOLED display. It offers great value for money and is suitable for both fitness enthusiasts and casual users.',
    rating: 4.3,
    reviews: 250
  }
];

const SmartWatchPage = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShow = (product) => setSelectedProduct(product);
  const handleClose = () => setSelectedProduct(null);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    if (halfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  return (
    <div className="page-container">
      <Container className="product-page">
      <h2>Here are our Smart watch collections</h2>
        
        <Row>
          {products.map(product => (
            <Col key={product.id} md={4}>
              <Card className="product-card" onClick={() => handleShow(product)}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="product-price">{product.price}</Card.Text>
                  <Button variant="primary" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
                    Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={!!selectedProduct} onHide={handleClose}>
          {selectedProduct && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProduct.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="modal-image" />
                <p className="product-price">{selectedProduct.price}</p>
                <p className="product-description">{selectedProduct.detailedDescription}</p>
                <div className="stars">
                  {renderStars(selectedProduct.rating)}
                  <span>({selectedProduct.reviews})</span>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => { addToCart(selectedProduct); handleClose(); }}>
                  Add to Cart
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </div>
  );
};

export default SmartWatchPage;
