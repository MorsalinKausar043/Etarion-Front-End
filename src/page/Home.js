import React from 'react';
import { Col, Row,Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='home_background padding_top'>
            <Row>
                <Col md={6} sm={12}>
                    <div className='margin_top'>
                        <h1 className='text-bolder'>Your Favourite Food</h1>
                        <h1 className='text-bolder'>  Delivered To You</h1>
                        <p className=''> Lorem ipsum dolor sit amet consectetuer adipiscing elit, <br /> sed diam nonummy nibh </p>

                         <div className='px-5'>
                                <form class="">
                                    <div class="input-group mb-3">
                                        <input id="city-name" type="text" class="form-control" placeholder="Enter Your location..." />
                                        
                                        <div class="input-group-append">
                                            <Button  className="btn btn-dark px-3 py-2">Search</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                    <img className='img_background img-fluid' src="https://us.123rf.com/450wm/tandav/tandav1901/tandav190100017/115340684-hot-chilli-pepper-logo-label-or-sticker-on-sunburst-background-natural-organic-food-concept-of-tasty.jpg?ver=6" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Home;