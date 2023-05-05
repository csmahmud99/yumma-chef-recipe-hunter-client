import React, { useContext } from 'react';
import { Button, Container, Nav, NavLink, Navbar, Stack } from 'react-bootstrap';
import logo from "../../../assets/yumma_logo.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("User is Successfully Logged Out");
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );

    return (
        <div>
            <Navbar className="pb-4" collapseOnSelect expand="lg" bg="warning" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="site-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mt-3">
                            <NavLink to="/" as={Link} className="active">
                                Home
                            </NavLink>
                            <NavLink to="/blog" as={Link} className="active">
                                Blog
                            </NavLink>
                        </Nav>
                        <Nav className="mt-3">
                            <Stack direction="horizontal" gap={3}>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    {user && <img className="rounded-circle w-25" src={user?.photoURL} alt="user-image" />}
                                </OverlayTrigger>

                                {
                                    user ?
                                        <Button onClick={handleLogout} variant="dark">Logout</Button>
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