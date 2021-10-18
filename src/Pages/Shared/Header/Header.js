import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
              <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><span className="fw-bold">Kamal's Diagnostic Center</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/appoinment">Appoinment</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                       
                    </Nav>
                    </Navbar.Collapse>
                </Container>
              </Navbar>
        </div>
    );
};

export default Header;