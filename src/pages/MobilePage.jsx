import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './ProductPage.css';

const products = [
  {
    id: 1,
    name: 'iPhone 13',
    description: 'Latest model with A15 Bionic chip and amazing camera quality.',
    price: '₹79,999',
    imageUrl: require('../Components/Assets/product_10.jpeg'),
    detailedDescription: 'The iPhone 13 comes with a 6.1-inch display, A15 Bionic chip, and a dual-camera system that provides exceptional photo quality even in low light conditions. It also supports 5G connectivity and offers improved battery life.',
    rating: 4.5,
    reviews: 250
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    description: 'High-end Android smartphone with stunning display.',
    price: '₹69,999',
    imageUrl: require('../Components/Assets/product_4.jpeg'),
    detailedDescription: 'The Samsung Galaxy S21 features a 6.2-inch Dynamic AMOLED display, Exynos 2100 processor, and a versatile triple-camera setup. It offers excellent performance, a sleek design, and long-lasting battery life.',
    rating: 4.0,
    reviews: 200
  },
  {
    id: 3,
    name: 'Google Pixel 6',
    description: 'Newest Google phone with Tensor chip and advanced AI features.',
    price: '₹59,999',
    imageUrl: require('../Components/Assets/product_5.jpeg'),
    detailedDescription: 'The Google Pixel 6 boasts a 6.4-inch display, Google Tensor processor, and a dual-camera system with advanced AI capabilities. It offers pure Android experience, regular updates, and impressive photography features.',
    rating: 4.2,
    reviews: 180
  },
  {
    id: 4,
    name: 'OnePlus 9',
    description: 'Fast and smooth Android experience with top-notch hardware.',
    price: '₹49,999',
    imageUrl: require('../Components/Assets/product_6.jpeg'),
    detailedDescription: 'The OnePlus 9 comes with a 6.55-inch Fluid AMOLED display, Snapdragon 888 processor, and a Hasselblad-tuned triple-camera system. It offers a smooth user experience, fast performance, and Warp Charge 65T technology.',
    rating: 4.3,
    reviews: 220
  },
  {
    id: 5,
    name: 'Sony Xperia 1 III',
    description: 'Professional-grade camera phone with 4K display.',
    price: '₹99,999',
    imageUrl: require('../Components/Assets/product_7.jpeg'),
    detailedDescription: 'The Sony Xperia 1 III features a 6.5-inch 4K HDR OLED display, Snapdragon 888 processor, and a triple-camera system with ZEISS optics. It is designed for photography enthusiasts and professionals, offering stunning visuals and performance.',
    rating: 4.6,
    reviews: 150
  },
  {
    id: 6,
    name: 'Xiaomi Mi 11',
    description: 'Flagship performance at a budget price with premium features.',
    price: '₹39,999',
    imageUrl: require('../Components/Assets/product_8.jpeg'),
    detailedDescription: 'The Xiaomi Mi 11 sports a 6.81-inch AMOLED display, Snapdragon 888 processor, and a 108MP triple-camera system. It provides flagship-level performance, a sleek design, and exceptional value for money.',
    rating: 4.1,
    reviews: 230
  },
  {
    id: 7,
    name: 'Oppo Find X3 Pro',
    description: 'Innovative quad-camera setup with microscope lens.',
    price: '₹89,999',
    imageUrl: require('../Components/Assets/product_9.jpeg'),
    detailedDescription: 'The Oppo Find X3 Pro features a 6.7-inch AMOLED display, Snapdragon 888 processor, and a unique quad-camera system with a 60x microscope lens. It offers a premium design, impressive camera capabilities, and fast charging support.',
    rating: 4.4,
    reviews: 170
  },
  {
    id: 8,
    name: 'Huawei P50 Pro',
    description: 'Outstanding camera and display with flagship performance.',
    price: '₹79,999',
    imageUrl: require('../Components/Assets/product_11.jpeg'),
    detailedDescription: 'The Huawei P50 Pro comes with a 6.6-inch OLED display, Kirin 9000 processor, and a quad-camera system with Leica optics. It offers exceptional photography features, a stunning display, and powerful performance.',
    rating: 4.5,
    reviews: 210
  },
  {
    id: 9,
    name: 'Nokia X20',
    description: 'Reliable performance and 5G connectivity at an affordable price.',
    price: '₹29,999',
    imageUrl: require('../Components/Assets/product_12.jpeg'),
    detailedDescription: 'The Nokia X20 features a 6.67-inch display, Snapdragon 480 processor, and a quad-camera system. It offers reliable performance, 5G connectivity, and a durable design with regular software updates.',
    rating: 4.0,
    reviews: 160
  },
  {
    id: 10,
    name: 'Asus ROG Phone 5',
    description: 'Ultimate gaming smartphone with top-tier specs.',
    price: '₹49,999',
    imageUrl: require('../Components/Assets/product_13.jpeg'),
    detailedDescription: 'The Asus ROG Phone 5 comes with a 6.78-inch AMOLED display, Snapdragon 888 processor, and a triple-camera system. It is designed for gamers, offering top-tier performance, customizable RGB lighting, and advanced cooling features.',
    rating: 4.8,
    reviews: 300
  },
  {
    id: 11,
    name: 'LG Wing',
    description: 'Unique swivel design with dual screens for multitasking.',
    price: '₹69,999',
    imageUrl: require('../Components/Assets/product_14.jpeg'),
    detailedDescription: 'The LG Wing features a unique swivel design with a 6.8-inch main display and a secondary 3.9-inch display. It is powered by the Snapdragon 765G processor and offers versatile multitasking capabilities with its dual screens.',
    rating: 4.1,
    reviews: 140
  },
  {
    id: 12,
    name: 'Motorola Edge+',
    description: 'High-end performance and display with a curved design.',
    price: '₹59,999',
    imageUrl: require('../Components/Assets/product_15.jpeg'),
    detailedDescription: 'The Motorola Edge+ sports a 6.7-inch OLED display with curved edges, Snapdragon 865 processor, and a triple-camera system. It offers high-end performance, a sleek design, and a powerful audio experience with its stereo speakers.',
    rating: 4.2,
    reviews: 190
  },
  {
    id: 13,
    name: 'Realme GT',
    description: 'Affordable flagship killer with impressive specs.',
    price: '₹29,999',
    imageUrl: require('../Components/Assets/product_16.jpeg'),
    detailedDescription: 'The Realme GT features a 6.43-inch Super AMOLED display, Snapdragon 888 processor, and a triple-camera system. It offers flagship-level performance, a stylish design, and excellent value for money.',
    rating: 4.3,
    reviews: 220
  },
  {
    id: 14,
    name: 'ZTE Axon 30 Ultra',
    description: 'Powerful performance and camera with sleek design.',
    price: '₹49,999',
    imageUrl: require('../Components/Assets/product_17.jpeg'),
    detailedDescription: 'The ZTE Axon 30 Ultra boasts a 6.67-inch AMOLED display, Snapdragon 888 processor, and a quad-camera system. It provides powerful performance, a sleek design, and impressive camera capabilities for photography enthusiasts.',
    rating: 4.4,
    reviews: 170
  },
  {
    id: 15,
    name: 'Vivo X60 Pro+',
    description: 'Professional camera system with Zeiss optics.',
    price: '₹69,999',
    imageUrl: require('../Components/Assets/product_18.jpeg'),
    detailedDescription: 'The Vivo X60 Pro+ features a 6.56-inch AMOLED display, Snapdragon 888 processor, and a quad-camera system with Zeiss optics. It offers professional-grade photography features, a stunning design, and high-end performance.',
    rating: 4.5,
    reviews: 210
  }
];

const MobilePage = ({ addToCart }) => {
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
        <h2>Here are our Mobile collections</h2>
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

export default MobilePage;