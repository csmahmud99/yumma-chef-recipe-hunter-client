import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className="bg-dark">
            <Container className="py-5">
                <h2 className="text-white text-center">Blog: Answers of 4 Questions</h2>
                <hr className="text-info" />
                <div>
                    <Row>
                        <Col className="mb-3" sm={1} md={6}>
                            <Card style={{minHeight: "400px"}} className="bg-warning text-white" border="warning">
                                <Card.Header>Tell us the differences between uncontrolled and controlled components.</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-dark">The differences between uncontrolled and controlled components:</Card.Title>
                                    <Card.Text className="text-black">
                                        Controlled components in React are components where the parent component has full control over the state of its child component. These components rely on props passed down from the parent component to update their state and behavior. This means that the parent component is responsible for updating the state of the child component and handling any changes to its state.
                                    </Card.Text>
                                    <Card.Text className="text-black">
                                        Uncontrolled components in React, on the other hand, are components where the child component manages its own state.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-3" sm={1} md={6}>
                            <Card style={{minHeight: "400px"}} className="bg-warning text-white" border="warning">
                                <Card.Header>How to validate React props using PropTypes</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-dark">Validation of React props using PropTypes:</Card.Title>
                                    <Card.Text className="text-black">
                                        PropTypes is a library in React that helps us validate the types of props passed to a component. To use it, we have to import it from the 'prop-types' package and have to define the expected types of props for a component using the static propTypes property. If a prop doesn't match its expected type, React will throw a warning in the console. This helps catch errors early and ensure that our components are being used correctly.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mb-3" sm={1} md={6}>
                            <Card style={{minHeight: "400px"}} className="bg-warning text-white" border="warning">
                                <Card.Header>Tell us the difference between nodejs and express js.</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-dark">The difference between nodejs and express js:</Card.Title>
                                    <Card.Text className="text-black">
                                        Node.js and Express.js are both important technologies for JavaScript web development.
                                    </Card.Text>
                                    <Card.Text className="text-black">
                                        Node.js is a runtime environment that allows developers to use JavaScript on the server-side to build applications that can run outside of a web browser. It provides a range of built-in features and modules for server-side programming.
                                    </Card.Text>
                                    <Card.Text className="text-black">
                                        Express.js, on the other hand, is a web framework that is built on top of Node.js. Express.js provides a set of features and tools that make it easier to build web applications and APIs.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-3" sm={1} md={6}>
                            <Card style={{minHeight: "400px"}} className="bg-warning text-white" border="warning">
                                <Card.Header>What is a custom hook, and why will you create a custom hook?</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-dark">Custom Hook & Way of Creating a Custom Hook:</Card.Title>
                                    <Card.Text className="text-black">
                                        A custom hook in React is a function that allows us to reuse logic between different components.
                                    </Card.Text>
                                    <Card.Text className="text-black">
                                        We would create a custom hook to avoid duplicating code and make our components more concise and easier to maintain. Custom hooks follow the naming convention of starting with the word 'use'.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Blog;