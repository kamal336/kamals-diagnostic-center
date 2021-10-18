import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id,title,img,desc} = props.service;
    return (
        <Col lg={6} className="mt-3"> 
        <div className="d-flex p-2 border rounded service">
         <div className="p-2">
           <img className="w-100" src={img} alt="" />
         </div>
         <div className="p-2">
           <h3 className="text-primary">{title}</h3>
           <p>{desc.slice(0,100)}</p>
           <Link to={`/service/${id}`}  className="btn btn-warning px-4 fw-semibold">Show Details</Link>
           
           </div> 
       </div>
       </Col>
    );
};

export default Service;