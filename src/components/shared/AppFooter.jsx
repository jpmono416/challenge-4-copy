import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AppFooter = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center" style={{ minHeight: '200px' }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>We are a dedicated team of travel enthusiasts, committed to providing the most accurate and up-to-date travel information. Our mission is to inspire and facilitate travel by providing essential tools, resources, and insights. We believe in the transformative power of travel and strive to make it accessible to everyone. Explore with us and discover the world's endless wonders.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Contact</h5>
                        <p>Email: travel-info@dfcorp.com</p>
                        <p>Phone: +44 01234 56789</p>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <p><a href="#" className="text-white">Facebook</a> | <a href="#" className="text-white">Twitter</a></p>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-3">
                <p>&copy; 2024 DFCorp. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default AppFooter;