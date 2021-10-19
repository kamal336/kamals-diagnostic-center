import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Instruments = () => {
    return (
       <div id="instrument">
            <Container>
            <h1 className="text-center fw-bold text-primary mt-3">Digital Instruments</h1>
           <Row className="my-3">
            <Col lg={3} md={6}>
            <img className="w-100 border" src="https://images.unsplash.com/photo-1614308460927-5024ba2e1dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </Col>
            <Col lg={3} md={6}>
            <img className="w-100 border" src="https://images.pexels.com/photos/7089617/pexels-photo-7089617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            </Col>

            <Col lg={3} md={6}>
            <img className="w-100 border"  src="https://image.freepik.com/free-photo/nurse-taking-notes-x-ray-room_107420-64797.jpg" alt="" />
            </Col>
            <Col lg={3} md={6}>
            <img className="w-100 border" src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </Col>
           </Row>
        </Container>
       </div>
    );
};

export default Instruments;