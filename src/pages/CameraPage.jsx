import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './ProductPage.css';

const products = [
  {
    id: 1,
    name: 'Canon EOS R5',
    description: 'Professional-grade mirrorless camera',
    price: '₹3,29,999',
    imageUrl: require('../Components/Assets/product_24.jpeg'),
    detailedDescription: 'The Canon EOS R5 offers outstanding image quality, 8K video recording, and advanced autofocus capabilities. It is ideal for professional photographers and videographers.',
    rating: 4.9,
    reviews: 320
  },
  {
    id: 2,
    name: 'Sony Alpha a7 III',
    description: 'Versatile full-frame mirrorless camera',
    price: '₹1,79,999',
    imageUrl: require('../Components/Assets/product_25.jpeg'),
    detailedDescription: 'The Sony Alpha a7 III is known for its excellent image quality, fast autofocus, and impressive low-light performance, making it a favorite among enthusiasts and professionals.',
    rating: 4.8,
    reviews: 290
  },
  {
    id: 3,
    name: 'Nikon Z6 II',
    description: 'High-speed mirrorless camera with great low-light performance',
    price: '₹2,19,999',
    imageUrl: require('../Components/Assets/product_26.jpeg'),
    detailedDescription: 'The Nikon Z6 II offers fast shooting speeds, excellent low-light performance, and dual card slots, making it a versatile choice for various photography needs.',
    rating: 4.7,
    reviews: 270
  },
  {
    id: 4,
    name: 'Fujifilm X-T4',
    description: 'Hybrid camera with advanced video features',
    price: '₹1,49,999',
    imageUrl: require('../Components/Assets/product_27.jpeg'),
    detailedDescription: 'The Fujifilm X-T4 is a powerful hybrid camera with excellent video capabilities, in-body stabilization, and a classic design, perfect for both photographers and videographers.',
    rating: 4.7,
    reviews: 250
  },
  {
    id: 5,
    name: 'Panasonic Lumix GH5',
    description: 'Micro Four Thirds camera with excellent video capabilities',
    price: '₹1,29,999',
    imageUrl: require('../Components/Assets/product_28.jpeg'),
    detailedDescription: 'The Panasonic Lumix GH5 is renowned for its video performance, offering 4K 60p recording, high bit rates, and a variety of professional video features.',
    rating: 4.6,
    reviews: 230
  },
  {
    id: 6,
    name: 'Olympus OM-D E-M1 Mark III',
    description: 'Micro Four Thirds camera with advanced stabilization',
    price: '₹1,19,999',
    imageUrl: require('../Components/Assets/product_29.jpeg'),
    detailedDescription: 'The Olympus OM-D E-M1 Mark III offers advanced stabilization, fast autofocus, and a rugged build, making it ideal for action and wildlife photography.',
    rating: 4.5,
    reviews: 210
  },
  {
    id: 7,
    name: 'Leica Q2',
    description: 'Premium compact camera with a full-frame sensor',
    price: '₹4,79,999',
    imageUrl: require('../Components/Assets/product_30.jpeg'),
    detailedDescription: 'The Leica Q2 combines luxury design with exceptional image quality, featuring a full-frame sensor, fixed 28mm lens, and weather sealing.',
    rating: 4.9,
    reviews: 150
  },
  {
    id: 8,
    name: 'Canon EOS M50 Mark II',
    description: 'Compact mirrorless camera with great features for vlogging',
    price: '₹59,999',
    imageUrl: require('../Components/Assets/product_31.jpeg'),
    detailedDescription: 'The Canon EOS M50 Mark II is a compact and versatile camera perfect for vlogging, offering excellent video quality, fast autofocus, and a vari-angle touchscreen.',
    rating: 4.4,
    reviews: 200
  },
  {
    id: 9,
    name: 'Sony ZV-1',
    description: 'Compact camera designed for content creators',
    price: '₹69,999',
    imageUrl: require('../Components/Assets/product_32.jpeg'),
    detailedDescription: 'The Sony ZV-1 is designed for content creators, featuring a flip-out screen, built-in ND filter, and excellent video and audio capabilities.',
    rating: 4.5,
    reviews: 180
  }
];

const CameraPage = ({ addToCart }) => {
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
        <h2>Here are our Camera collections</h2>
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
                    Add to Cart
                  </Button>
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

export default CameraPage;
