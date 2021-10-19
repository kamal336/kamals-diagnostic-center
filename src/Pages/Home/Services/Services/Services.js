import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {

    const [services] = useServices();
    
    return (
       <div id="services">
            <Container>
            <h1 className="text-primary fw-bold text-center my-3">Our Services</h1>
        <Row>
            {
                services.map(service=> <Service 
                  key={service.id}
                  service={service}
                />)
            }
        </Row>
        </Container>
       </div>
    );
};

export default Services;