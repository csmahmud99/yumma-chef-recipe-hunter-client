import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import logo from "../../../assets/yumma_logo.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Navbar className="pb-4" collapseOnSelect expand="lg" bg="warning" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="site-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mt-3">
                            <Link to="/" className="me-3"><Button variant="link" className="text-decoration-none text-dark fw-semibold">Home</Button></Link>

                            <Link to="/blog"><Button variant="link" className="text-decoration-none text-dark fw-semibold">Blog</Button></Link>
                        </Nav>
                        <Nav className="mt-3">
                            <Stack direction="horizontal" gap={3}>
                                {user && <FaUserCircle className="fs-2" />}
                                {
                                    user ?
                                        <Button variant="dark">Logout</Button>
                                        : <Link to="/login"><Button variant="dark">Login</Button></Link>
                                }
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;