import React, { useContext } from 'react';
import { Button, Container, Nav, NavLink, Navbar, Stack } from 'react-bootstrap';
import logo from "../../../assets/yumma_logo.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("User is Successfully Logged Out");
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <Navbar className="pb-4" collapseOnSelect expand="lg" bg="warning" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="site-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mt-3 fw-bolder fs-3">
                            <NavLink to="/" as={Link}>
                                Home
                            </NavLink>
                            <NavLink to="/blog" as={Link}>
                                Blog
                            </NavLink>
                        </Nav>
                        <Nav className="mt-3 ">
                            <Stack direction="horizontal" gap={3}>
                                <div className="w-50">
                                    {user && <img title={user?.displayName} className="rounded-circle" style={{width: "50px"}} src={user?.photoURL} alt="user-image" />}
                                </div>

                                <div>
                                    {
                                        user ?
                                            <Button onClick={handleLogout} variant="dark">Logout</Button>
                                            : <Link to="/login"><Button variant="dark">Login</Button></Link>
                                    }
                                </div>

                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;