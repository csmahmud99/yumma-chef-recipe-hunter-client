import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CountUp from 'react-countup';

const Recipe = () => {
    const recipe = useLoaderData();
    console.log(recipe);

    const { chefName, chefPictureUrl, chefBio, numLikes, numRecipes, yearsOfExperience } = recipe;

    return (
        <div>
            <div className="text-center py-5 bg-dark">
                <Container>
                    <div>
                        <img className="rounded-circle border border-warning border-4" src={chefPictureUrl} alt="chef-image" />
                    </div>

                    <div className="my-3">
                        <h2 className="text-warning bg-black rounded p-3">{chefName}</h2>
                    </div>

                    <div>
                        <p className="text-white">
                            {chefBio}
                        </p>
                    </div>

                    <div>
                        <Row>
                            <Col className="mb-2" sm={1} md={4}>
                                <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>
                                            <CountUp end={numLikes} />
                                        </Card.Title>
                                        <Card.Text>
                                            People Likes
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mb-2" sm={1} md={4}>
                                <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>
                                            <CountUp end={numRecipes} />
                                        </Card.Title>
                                        <Card.Text>
                                            Number of Recipes
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mb-2" sm={1} md={4}>
                                <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>
                                            <CountUp end={yearsOfExperience} />
                                        </Card.Title>
                                        <Card.Text>
                                            Years of Experiences
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Recipe;