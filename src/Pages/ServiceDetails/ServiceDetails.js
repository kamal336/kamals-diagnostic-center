import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css'


const ServiceDetails = () => {
    const {id} = useParams();
    const [singleService,setSingleService] = useState([]);
        useEffect(()=>{
            fetch("/services.json")
            .then(res=> res.json())
            .then(data => setSingleService(data))
        },[]);

    // single found  service 
    const singleFound = singleService.filter(service=> service.id == id)
    
    return (
        <div className="details">   
        <Row  className="mt-3 w-50 mx-auto"> 
          <h1 className="text-center my-3 fw-bold text-light">  {singleFound[0]?.title} Deparment</h1>
          <div className="d-flex ms-5 p-2 border">
          <div className="p-2">
           <img className="w-100" src={singleFound[0]?.img} alt="" />
          </div>
          <div className="p-2">
           <h3 className="text-warning">{singleFound[0]?.title}</h3>
           <p className="text-light">{singleFound[0]?.desc}</p>
           <Link to="/home"  className="btn btn-warning px-4 fw-semibold">Back to Services</Link>
           
           </div> 
         </div>
       </Row></div>
    );
};

export default ServiceDetails;