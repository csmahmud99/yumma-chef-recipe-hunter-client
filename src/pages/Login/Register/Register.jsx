import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState(" ");

    const [success, setSuccess] = useState(" ");

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoUrl, email, password);
        createUser(email, password)
            .then(userCredential => {
                const createdUser = userCredential.user;
                console.log(createdUser);
                setSuccess("User Created Successfully.");
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });
    };

    return (
        <div className="bg-dark py-5">
            <Container>
                <h2 className="text-warning text-center">Create an Account</h2>
                <hr className="text-info" />
                <div>
                    <Form onSubmit={handleRegister} className="bg-black text-warning p-4 w-25 mx-auto mt-5 rounded border border-white border-5">
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name="name" id="name" placeholder="Provide Your Full Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name="photourl" id="photourl" placeholder="Provide Your Photo URL" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" id="email" placeholder="Provide email" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" id="password" placeholder="Provide Password" required />
                        </Form.Group>

                        <p className="text-danger">
                            {error}
                        </p>

                        <p className="text-success">
                            {success}
                        </p>

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