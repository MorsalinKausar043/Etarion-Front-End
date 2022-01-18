import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';

const Menubar = () => {
    return (
        <div>
             <Navbar  variant="danger" className="p-3 background_color " fixed="top">
                <Container className="">
                    <Navbar.Brand as={NavLink} to='/home' className='fs-1 text-dark'>Helo World</Navbar.Brand>
                    <Nav className="ms-auto">
                    <Nav.Link as={NavLink}  to="/" className="text-dark fst-bold pt-3 px-4">
                   English
                </Nav.Link>
                    <Nav.Link as={NavLink}  to="/" className="text-dark fst-bold">
                    <Button type="button" className="btn btn_color">Sign in</Button>
                </Nav.Link>
                     
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;     