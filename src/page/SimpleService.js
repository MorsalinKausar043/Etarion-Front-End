import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './style.css'

const SimpleService = () => {
    return (
        <div>
            <Container>
                <h3 className="text-start circles fst-italic fw-bold bg-warning ">Download  the app</h3>
                <Row>
                    <Col md={8}>
                    <img className="roundud" src="https://www.upwork.com/catalog-images-resized/1103fdfd3f730fab92142afa73da0cfd/large" alt="" />
                    </Col>
                    <Col md={4}>
                     <div className="widthTop px-5">
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur temporibus, rerum, autem quis aspernatur, .</p>
                       <img className="imgWidth p-3" src="https://sep.yimg.com/ca/I/yhst-132897225639530_2266_476733" alt="" />

                       <img className="imgWidth px-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCYFv5xYK31aRDFW1eS5ofjmydqheVNkaEQ&usqp=CAU" alt="" />
                     </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SimpleService;