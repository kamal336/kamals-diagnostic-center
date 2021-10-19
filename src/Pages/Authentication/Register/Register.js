import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';


const Register = () => {
    const {googleSignIn,error,nameHandler,emailHandler,passwordHandler,handleSubmit} = useAuth();
    return (
        <div className="details">
        <Row>
        <Col lg={4} md={12} className="mx-auto">
        <h1 className="text-center text-white">Please Register</h1>
        <Form onSubmit={handleSubmit} className="mx-auto border p-5 rounded">
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control onBlur={nameHandler} type="text" placeholder="Your name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onBlur={emailHandler} type="email" placeholder="Your email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onBlur={passwordHandler} type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
         Register
        </Button>
        </Form>
           <div className="my-4">
            <div className="my-3 mb-3 text-danger">{error}</div>
            <span onClick={googleSignIn} className="bg-light p-2 rounded me-3"><img width="20px"  src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /> Google</span>

            <span  className="bg-light p-2 me-3 rounded"><img width="20px" src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" /> Github</span>

            <span  className="bg-light p-2 me-3 rounded"><img width="20px" src="https://cdn-icons.flaticon.com/png/512/176/premium/176686.png?token=exp=1633932701~hmac=3a4cf9f1f59ac6c1fd16c29d2b61f16c" alt="" /> Facebook</span>
            </div>
            <Link className="text-white mt-3 " to="/login">Already have an account?</Link>
        </Col>
        </Row>
    </div>
    );
};

export default Register;