import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CountUp from 'react-countup';
import RecipeCard from '../RecipeCard/RecipeCard';
import LazyLoad from 'react-lazy-load';

const Recipe = () => {
    // This data is coming from the server and by fetched from the file named 'Routes.jsx'
    const recipe = useLoaderData();
    // console.log(recipe);

    // Used inside the useEffect at line 17 of this file
    const [recipeData, setRecipeData] = useState([]);


    // This useEffect React Hook is used here for turning off the re-rendering problem of recipeData on the above useState().
    useEffect(() => {
        setRecipeData(recipe.recipes);
    }, [])

    // This are destructured and coming from the backend server for chef recipe page banner chef info.
    const { chefName, chefPictureUrl, chefBio, numLikes, numRecipes, yearsOfExperience } = recipe;

    return (
        <div>
            {/* Chef Recipe Private Page : Banner */}
            <div className="text-center py-5 bg-dark">
                <Container>
                    {/* This Lazy Load will work while chef info. will come from the server to the UI */}
                    <div>
                        <LazyLoad>
                            <img className="rounded-circle border border-warning border-4" src={chefPictureUrl} alt="chef-image" />
                        </LazyLoad>
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

            {/* Chef Recipe Page : 3 Recipe Cards */}
            <div className="py-5 bg-warning">
                <Container>
                    <h2 className="text-center">See {chefName}'s Recipes</h2>
                    <hr />
                    <div>
                        {/* This will make 3 cards according to the recipe data fetched and found from the server */}
                        <Row>
                            {
                                recipeData?.map((recipeSingle, index) => <RecipeCard
                                    key={`recipeSingle.${index}`} recipeSingle={recipeSingle}
                                />)
                            }
                        </Row>
                    </div>

                    {/* Chef Recipe to Home : Go Back Button */}
                    <div className="text-center mt-5">
                        <Link to="/">
                            <Button className="fw-semibold fs-4" variant="dark">Back to Home Page</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Recipe;