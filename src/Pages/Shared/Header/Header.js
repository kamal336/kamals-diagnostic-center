import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import './Header.css'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="header">
              <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img width="30px" height="30px" src="https://www.nicepng.com/png/detail/37-377989_medical-logo-png-medical-laboratory-logo-png.png" alt="" />
                        <span style={{color:"#000080",fontSize:"26px",fontFamily:"cursive"}} className="fw-bold">Kamal's Diagnostic Center</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#instrument">Instruments</Nav.Link>
                        <Nav.Link as={Link} to="/appoinment">Appoinment</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        {!user.email?<Nav.Link as={Link} to="/login">Login</Nav.Link>:
                        <Nav.Link style={{color:"#000080",fontSize:"17px",fontFamily:"cursive"}} onClick={logOut}><span className="border rounded p-2">{user.displayName}</span> Logout</Nav.Link>}
                       
                    </Nav>
                    </Navbar.Collapse>
                </Container>
              </Navbar>
        </div>
    );
};

export default Header;