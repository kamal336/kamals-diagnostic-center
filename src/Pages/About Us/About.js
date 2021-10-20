import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myImg1 from './../../images/aboutme1.jpg'

const About = () => {
    return (
       <div className="details text-white">
            <Container className="p-4">
    
         <Row className="text-center">

             <Col lg={7}>
             <h2>Akter Kamal</h2>
             <h4>B.Sc in Medical Technology.</h4>
             <p>2013–2015 Central New Mexico Community College

               Medical Laboratory Technician Associate of Applied Science with MLT Certification

               Excelled in clinical chemistry and hematology.
               Pursued a passion for immunology coursework.</p>
             <p> 
                Efficient Medical Lab Technician MLT with 4+ years of experience, skilled in equipment care and operation and training. Seeking to deliver fast, efficient analysis for Medorlabs. At Soltefiore Health, performed hematology testing and lab maintenance. Spearheaded 5S drive that slashed searching time by 53%.</p>
             </Col>

             <Col lg={5}>
                 <img className="w-100" src={myImg1} alt="" />
             </Col>
         </Row>

         <Row className="mt-5">
            <Col lg={9} md={12} className="text-center mx-auto">
            <h1>About <span className="">OUR STORY</span></h1>
            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
             </Col>
         </Row>
        </Container>
       </div>
    );
};

export default About;