import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';


const Appoinment = () => {
    return (
        <div className="details">
        <Row>
        <Col lg={6} md={12} className="mx-auto">
        <h1 className="text-center text-white">Please Detail Information</h1>
        <Form className="mx-auto border p-5 rounded">
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control  type="text" placeholder="Your name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control  type="text" placeholder="Your age" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="gender" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Please write about symptom here" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Address" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="number" placeholder="Phone number" required/>
        </Form.Group>
        <Button className="me-3" variant="primary" type="submit">
         Send
        </Button>
        <Button variant="primary" type="submit">
         Reset
        </Button>
        </Form>
        </Col>
        </Row>
    </div>
    );
};

export default Appoinment;