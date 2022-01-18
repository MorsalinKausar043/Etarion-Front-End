import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './style.css'

const About = () => {

    return (
        <div>
            <div className='m-5'>
                <Container >
                    <div>
                    <h3 className="text-start circle fst-italic fw-bold bg-warning ">About Us</h3>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col className="text-start px-5">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse animi molestias necessitatibus ex, aut qui hic adipisci deserunt quo sapiente consequatur illo. Beatae nisi, eos delectus consectetur deleniti iusto quis nihil? Repudiandae dolorem ea porro voluptatem et! Dolore, ratione! Tempore nemo officia molestiae necessitatibus. Cum odio beatae harum, a animi voluptates facilis exercitationem ab quibusdam maxime doloribus possimus distinctio sunt sint ipsa obcaecati asperiores! Molestiae necessitatibus magnam delectus nostrum quasi dicta omnis iste fuga, minus voluptatem impedit incidunt et minima cupiditate dolorem vitae repudiandae labore. Ex eveniet quis, quae nesciunt nihil fugit eaque ipsam reiciendis ipsa, enim, optio modi? Voluptas.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*-------------------------------service section---------------------------------------- */}
            <div>
                <Container fluid>
                    <Row>
                    <Col md={4} sm={12} >
                            <div className="bg mx-5">
                                <i class="fas fa-money-check-alt icon pt-5 rounded-3 text-dark"></i>
                            </div>
                             <div className="px-3">
                             <h4 className="text-start px-3 mt-5">More Money</h4>
                            <p className="text-start pb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna </p>
                             </div>
                        </Col>
                        <Col md={4} sm={12} >
                            <div className="bg">
                                <i class="fas fa-check-circle icon pt-5 rounded text-success"></i>
                            </div>
                             <div className="px-3">
                             <h4 className="text-start px-3 mt-5">100% Risk Free</h4>
                            <p className="text-start pb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna </p>
                             </div>
                        </Col>
                        <Col md={4} sm={12} >
                            <div className="bg">
                           <i class="fas fa-restroom  icon py-5 rounded text-dark"></i>
                            </div>
                            <div className="px-3">
                            <h4 className="text-start px-3 mt-5">Home Delivery</h4>
                            <p className="text-start pb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna </p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div >
    );
};

export default About;

