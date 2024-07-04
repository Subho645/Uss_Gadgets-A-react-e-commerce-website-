import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './ProductPage.css';

const products = [
  {
    id: 1,
    name: 'MacBook Pro',
    description: 'Powerful performance with M1 chip',
    price: '₹1,29,999',
    imageUrl: require('../Components/Assets/product_1.jpeg'),
    detailedDescription: 'The MacBook Pro features a 13.3-inch Retina display, M1 chip, and up to 20 hours of battery life. It offers exceptional performance and is ideal for both professionals and students.',
    rating: 4.8,
    reviews: 300
  },
  {
    id: 2,
    name: 'Dell XPS 13',
    description: 'Compact and powerful ultrabook',
    price: '₹1,19,999',
    imageUrl: require('../Components/Assets/product_2.jpeg'),
    detailedDescription: 'The Dell XPS 13 comes with a 13.4-inch InfinityEdge display, Intel Core i7 processor, and a sleek design. It provides high performance in a compact form factor, perfect for on-the-go professionals.',
    rating: 4.5,
    reviews: 250
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    description: 'Convertible laptop with stunning design',
    price: '₹1,09,999',
    imageUrl: require('../Components/Assets/product_3.jpeg'),
    detailedDescription: 'The HP Spectre x360 features a 13.3-inch Full HD touchscreen, Intel Core i7 processor, and a 360-degree hinge for versatility. It combines powerful performance with a stunning design.',
    rating: 4.7,
    reviews: 200
  },
  {
    id: 4,
    name: 'Lenovo ThinkPad X1 Carbon',
    description: 'Business laptop with great durability',
    price: '₹1,39,999',
    imageUrl: require('../Components/Assets/laptop_1.jpg'),
    detailedDescription: 'The Lenovo ThinkPad X1 Carbon offers a 14-inch Full HD display, Intel Core i7 processor, and military-grade durability. It is a reliable business laptop with excellent performance and battery life.',
    rating: 4.6,
    reviews: 180
  },
  {
    id: 5,
    name: 'Asus ROG Zephyrus G14',
    description: 'High-performance gaming laptop',
    price: '₹1,49,999',
    imageUrl: require('../Components/Assets/laptop_2.jpg'),
    detailedDescription: 'The Asus ROG Zephyrus G14 comes with a 14-inch Full HD display, AMD Ryzen 9 processor, and NVIDIA GeForce RTX 3060 graphics. It delivers top-notch gaming performance in a portable package.',
    rating: 4.9,
    reviews: 220
  },
  {
    id: 6,
    name: 'Acer Swift 3',
    description: 'Affordable ultrabook with great battery life',
    price: '₹69,999',
    imageUrl: require('../Components/Assets/laptop_3.jpg'),
    detailedDescription: 'The Acer Swift 3 features a 14-inch Full HD display, AMD Ryzen 7 processor, and long battery life. It offers great performance at an affordable price, making it ideal for students and professionals.',
    rating: 4.3,
    reviews: 150
  },
  {
    id: 7,
    name: 'Microsoft Surface Laptop 4',
    description: 'Sleek design with great display',
    price: '₹1,19,999',
    imageUrl: require('../Components/Assets/laptop_4.jpg'),
    detailedDescription: 'The Microsoft Surface Laptop 4 comes with a 13.5-inch PixelSense display, Intel Core i5 processor, and a sleek design. It provides a premium user experience with excellent build quality.',
    rating: 4.5,
    reviews: 190
  },
  {
    id: 8,
    name: 'Razer Blade 15',
    description: 'Premium gaming laptop',
    price: '₹1,89,999',
    imageUrl: require('../Components/Assets/laptop_5.jpg'),
    detailedDescription: 'The Razer Blade 15 features a 15.6-inch Full HD display, Intel Core i7 processor, and NVIDIA GeForce RTX 3070 graphics. It offers a premium gaming experience with top-tier performance and design.',
    rating: 4.8,
    reviews: 210
  },
  {
    id: 9,
    name: 'Samsung Galaxy Book Flex',
    description: 'Convertible laptop with QLED display',
    price: '₹1,09,999',
    imageUrl: require('../Components/Assets/laptop_6.jpg'),
    detailedDescription: 'The Samsung Galaxy Book Flex features a 13.3-inch QLED touchscreen, Intel Core i7 processor, and a 360-degree hinge. It combines vibrant visuals with versatile functionality.',
    rating: 4.4,
    reviews: 170
  },
  {
    id: 10,
    name: 'Huawei MateBook X Pro',
    description: 'Ultra-slim laptop with high-resolution display',
    price: '₹1,39,999',
    imageUrl: require('../Components/Assets/laptop_7.jpg'),
    detailedDescription: 'The Huawei MateBook X Pro offers a 13.9-inch 3K display, Intel Core i7 processor, and a sleek, ultra-slim design. It provides a premium experience with high-resolution visuals and powerful performance.',
    rating: 4.6,
    reviews: 160
  },
  {
    id: 11,
    name: 'LG Gram 17',
    description: 'Lightweight laptop with large display',
    price: '₹1,49,999',
    imageUrl: require('../Components/Assets/laptop_8.jpg'),
    detailedDescription: 'The LG Gram 17 features a 17-inch WQXGA display, Intel Core i7 processor, and a lightweight design. It offers a large screen experience with exceptional portability and battery life.',
    rating: 4.5,
    reviews: 140
  },
  {
    id: 12,
    name: 'Google Pixelbook Go',
    description: 'Premium Chromebook with great performance',
    price: '₹79,999',
    imageUrl: require('../Components/Assets/laptop_9.jpg'),
    detailedDescription: 'The Google Pixelbook Go comes with a 13.3-inch Full HD touchscreen, Intel Core i5 processor, and Chrome OS. It offers a premium Chromebook experience with excellent performance and portability.',
    rating: 4.4,
    reviews: 180
  },
  {
    id: 13,
    name: 'iPad Pro 12.9-inch',
    description: 'High-end tablet with advanced features',
    price: '₹1,09,999',
    imageUrl: require('../Components/Assets/product_13.jpeg'),
    detailedDescription: 'The iPad Pro 12.9-inch features a Liquid Retina XDR display, Apple M1 chip, and 5G capability. It delivers high-end performance with a sleek, futuristic design.',
    rating: 4.8,
    reviews: 230
  },
  {
    id: 14,
    name: 'Samsung Galaxy Tab S7+',
    description: 'Powerful and versatile tablet',
    price: '₹89,999',
    imageUrl: require('../Components/Assets/product_14.jpeg'),
    detailedDescription: 'The Samsung Galaxy Tab S7+ features a 12.4-inch Super AMOLED display, Snapdragon 865+ processor, and S Pen support. It offers powerful performance in a portable, stylish package.',
    rating: 4.7,
    reviews: 220
  },
  {
    id: 15,
    name: 'Microsoft Surface Pro 7',
    description: 'Affordable 2-in-1 tablet and laptop',
    price: '₹79,999',
    imageUrl: require('../Components/Assets/product_15.jpeg'),
    detailedDescription: 'The Microsoft Surface Pro 7 comes with a 12.3-inch PixelSense display, Intel Core i5 processor, and integrated graphics. It provides excellent performance at an affordable price, with the versatility of a tablet and a laptop.',
    rating: 4.5,
    reviews: 200
  }
];

const LaptopPage = ({addToCart}) => {
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
        <h2>Here are our Laptop collections</h2>
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

export default LaptopPage;
