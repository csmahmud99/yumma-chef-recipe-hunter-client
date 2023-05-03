import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../assets/yumma_logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className="pb-4" collapseOnSelect expand="lg" bg="warning" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="site-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto  mt-3">
                            <Link to="/" className="me-3"><Button variant="link" className="text-decoration-none text-dark fw-semibold">Home</Button></Link>

                            <Link to="/blog"><Button variant="link" className="text-decoration-none text-dark fw-semibold">Blog</Button></Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;