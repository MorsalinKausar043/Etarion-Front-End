import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CityPicture = () => {
    return (
        <div className='marginTup'>
            <Container >
                <h4 className="text-start py-3">Get your favourite food from the best restaurants in your city</h4>
                <Row>
                    <Col className="border">
                    <img  src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNpdHl8ZW58MHx8MHx8&w=1000&q=80" className="w-100 h-100" alt="" />
                    </Col>
                      
 {/* ---------------nested fast coulum------------ */}
                    <Col>
                        <Row>
                            <Col sm={6}>
                                <div class="card">
                                    <img src="https://triper.dexignlab.com/xhtml/images/our-work/pic4.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">UK city</h5>
                                       
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div class="card">
                                    <img src="https://triper.dexignlab.com/xhtml/images/our-work/pic5.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Europe City</h5>
                                       
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {/* ---------------------second column------------------- */}
                        <Row className="mt-3">
                            <Col sm={6}>
                                <div class="card">
                                    <img src="https://triper.dexignlab.com/xhtml/images/our-work/pic3.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Italy</h5>
                                       
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div class="card">
                                    <img src="https://triper.dexignlab.com/xhtml/images/our-work/pic1.jpg" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Japan Tokyo</h5>
                                      
                                    </div>
                                </div>
                            </Col>
                            {/* ---------------------third row column------------------- */}
                            {/* <Col sm={6}>
                                <div class="card">
                                    <img src="https://triper.dexignlab.com/xhtml/images/our-work/pic1.jpg" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Japan Tokyo</h5>
                                      
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div class="card">
                                    <img src="https://triper.dexignlab.com/xhtml/images/our-work/pic1.jpg" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Japan Tokyo</h5>
                                      
                                    </div>
                                </div>
                            </Col> */}
                        </Row>
                    </Col>
                    {/* ------------------------------------ */}
                </Row>
            </Container>
        </div>
    );
};

export default CityPicture;