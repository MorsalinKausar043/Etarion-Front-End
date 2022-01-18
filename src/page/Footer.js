import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {

    
    return (
        <div >
           <Container fluid>
              <Row className="bg-dark text-white p-5">
                     <Col md={4} sm={12}  className="">
                         <h2>Lorem ipsum </h2>
                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                     </Col>
                     <Col md={4} sm={12} >
                          <Row>
                              <Col>
                              <div className='border-start border-success border-5'>
                               <h2>Lorem ispum</h2>
                                 <p>helo lorem </p>
                                 <p>helo lorem </p>
                                 <p>helo lorem </p>
                               </div>
                                
                              </Col>
                              <Col>
                                 <div className='border-start border-warning border-5'>
                                 <h2>Lorem ispum</h2>
                                 <p>helo lorem </p>
                                 <p>helo lorem </p>
                                 <p>helo lorem </p>
                                 </div>
                                
                              </Col>
                          </Row>
                     </Col>
                     <Col md={4} sm={12} >
                         <br /><br /> <br /><br />
                         <h2>Lorem<span className="text-warning">Helo MIs</span></h2> 
                         <i class="fab fa-facebook fs-2 mx-3 bg-warning text-dark rounded"></i>
                         <i class="fab fa-instagram fs-2 mx-3 bg-warning text-dark rounded"></i>
                         <i class="fab fa-twitter fs-2 mx-3 bg-warning text-dark rounded"></i>
                     </Col>
              </Row>
             
            </Container>
            
            <p className='text-center p-4 bg-dark fst-bold text-white border border-secondary border-1 border-start-0 border-top' >Copyright 2019 <span className='text-warning'>Organic</span>. All rights reserved. Designed by <span className="text-warning">GraphicForest.</span></p>
        </div>
    );
};

export default Footer;