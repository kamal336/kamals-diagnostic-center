import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark p-4 pb-0 text-white text-center">
         <Container>
            <Row>
           
                <Col lg={4}>
                <h3>Kamal's Diagnostic Center</h3>
                <p>Diagnosis lab test & Research.</p>
              
                </Col>
                <Col lg={4}>
                <h1>Kamal akter</h1>
            
                </Col>
                <Col lg={4}>
                <h1>Kamal akter</h1>
                </Col>
            
            </Row>
            <Row>
                
                <p>&copy;2021 Laboratory All rights reserved by Akter Kamal. Passionate Web Developer and Web Learner.</p>
                </Row>
          
         </Container>
       
       </div>
    );
};

export default Footer;