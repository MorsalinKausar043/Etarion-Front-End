import React from 'react';
import { Button, Col, Container ,Row} from 'react-bootstrap';
import './style.css'

const PatnerArea = () => {
    return (
        <div className='background-image'>
            <Container>
                <Row>
                    <Col>
                    <div className='border-color'>
                       <h5 className='my-2 text-start opacityBackground text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque modi, quasi eos unde dolores, similique, maxime voluptatibus quidem debitis asperiores? Nam ratione adipisci .</h5>
                       <Button className="btn btn-outline-warning  py-3 mt-4 text-uppercase rounded-3 px-5">Sign up your store</Button>
                       </div>
                    </Col>
                    <Col>
                       <h3 className='text-end text-danger fst=1 my-3 rounded py-3 '>Become  a Partner</h3>
                    

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PatnerArea;