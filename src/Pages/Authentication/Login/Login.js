import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../context/useAuth';



const Login = () => {
    const {googleSignIn,error,handleSubmit} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";
    const handleGoogleLogin = () =>{
        googleSignIn()
      .then(result=>{
         history.push(redirect_uri)
      })
    }
    return (
        
        <div className="details">
            <Row>
            <Col lg={4} md={12} className="mx-auto">
            <h1 className="text-center text-white">Please Login</h1>
            <Form onSubmit={handleSubmit} className="mx-auto border p-5 rounded">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
             Login
            </Button>
            </Form>
               <div className="my-4">
                <div className="my-3 mb-3 text-danger">{error}</div>
                <span onClick={handleGoogleLogin} className="bg-light p-2 rounded me-3"><img width="20px"  src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /> Google</span>

                <span  className="bg-light p-2 me-3 rounded"><img width="20px" src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" /> Github</span>

                <span  className="bg-light p-2 me-3 rounded"><img width="20px" src="https://cdn-icons.flaticon.com/png/512/176/premium/176686.png?token=exp=1633932701~hmac=3a4cf9f1f59ac6c1fd16c29d2b61f16c" alt="" /> Facebook</span>
                </div>
                <Link className="text-white mt-3 " to="/register">Create an account</Link>
            </Col>
            </Row>
        </div>
        
    );
};

export default Login;