import React from 'react';
import { Button, Container, Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="bg-dark py-5">
            <Container>
                <h2 className="text-warning text-center">Login to Your Account</h2>
                <hr className="text-info" />
                <div>
                    <Form className="bg-black text-warning p-4 w-25 mx-auto mt-5 rounded border border-white border-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter Your Email Address" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter Your Password" required />
                        </Form.Group>

                        <Button className="mb-3" variant="primary" type="submit">
                            Login
                        </Button>

                        <div>
                            <Stack direction="horizontal" gap={3}>
                                <Button className="mb-3" variant="primary" type="submit">
                                    <FaGoogle className="fs-4 text-warning" /> <br /> Google Login
                                </Button>
                                <Button className="mb-3 ms-auto" variant="primary" type="submit">
                                    <FaGithub className="fs-4 text-warning" /> <br /> Github Login
                                </Button>
                            </Stack>
                        </div>

                        <div>
                            <Form.Text className="text-white mt-5 fs-6 fw-semibold">
                                Don't have an account yet? Please, <Link className="text-decoration-none" to="/register">Register</Link>.
                            </Form.Text>
                        </div>

                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Login;