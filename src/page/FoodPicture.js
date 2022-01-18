import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './style.css'

const FoodPicture = () => { 
    return (
        <div>
             <Container className="Top">
                 <h3 className="text-center circle_rounded fst-italic fw-bold bg-warning ">The flavours  of your wish</h3>
                 {/* <h3 className="text-start circle fst-italic fw-bold bg-warning ">About Us</h3> */}
                <Row>
                    <Col md={3} sm={12}>
                        <img src="https://i.ibb.co/ZzSFX82/breakfast1.png" className='img-fluid' alt="" />
                    </Col> 
                    
                    <Col md={3} sm={12}>
                        <img src="https://i.ibb.co/6g6ytJ9/breakfast4.png" className='img-fluid' alt="" />
                    </Col> 
                    
                    <Col md={3} sm={12}>
                        <img src="https://i.ibb.co/bXTK9PY/lunch4.png" className='img-fluid' alt="" />
                    </Col> 
                    
                    <Col md={3} sm={12}>
                        <img src="https://i.ibb.co/Wx2kSMT/dinner4.png" className='img-fluid' alt="" />
                    </Col>
                </Row>

                <Row>
                    <Col md={3} sm={12}>
                        <img src="https://i.ibb.co/g3wCzg0/dinner3.png" className='img-fluid' alt="" />
                    </Col> 
                    
                    <Col md={3} sm={12}>
                        <img src="https://i.ibb.co/939Trpc/breakfast6.png" className='img-fluid' alt="" />
                    </Col> 
                    
                    <Col md={3} sm={12}>
                        <img src="https://i.ibb.co/KFX7Mfh/breakfast2.png" className='img-fluid' alt="" />
                    </Col> 
                    
                    <Col md={3} sm={12}>
                        <img src="https://i.ibb.co/CbYgVS7/dinner2.png" className='img-fluid' alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodPicture;