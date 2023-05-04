import React from 'react';
import { Button, Container, Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Register = () => {
    return (
        <div className="bg-dark py-5">
            <Container>
                <h2 className="text-warning text-center">Create an Account</h2>
                <hr className="text-info" />
                <div>
                    <Form className="bg-black text-warning p-4 w-25 mx-auto mt-5 rounded border border-white border-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Provide Your Full Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name="photourl" placeholder="Provide Your Photo URL" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Provide email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Provide Password" required />
                        </Form.Group>

                        <Button className="mb-3" variant="primary" type="submit">
                            Register
                        </Button>

                        <div>
                            <Form.Text className="text-white mt-5 fs-6 fw-semibold">
                                Already have an account? Please, <Link className="text-decoration-none" to="/login">Login</Link>.
                            </Form.Text>
                        </div>

                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Register;