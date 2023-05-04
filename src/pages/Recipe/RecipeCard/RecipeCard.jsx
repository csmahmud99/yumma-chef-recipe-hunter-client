import React, { useState } from 'react';
import { Button, Card, CardGroup, Col, Stack } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaBookmark } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipeSingle }) => {
    console.log(recipeSingle);

    const { recipeName, ingredients, cookingMethod, rating } = recipeSingle;

    const [disabled, setDisabled] = useState(false);

    const handleBookmark = () => {
        toast("Wow!!! The Recipe is Your Favorite");
        setDisabled(true);
    };

    return (
        <Col sm={1} md={4}>
            <CardGroup>
                <Card className="bg-dark" style={{ minHeight: "400px" }}>
                    <Card.Body>
                        <div>
                            <Card.Title className="text-warning text-center">{recipeName}</Card.Title>
                        </div>

                        <hr className="text-info" />

                        <div>
                            <Card.Text className="text-white"><strong className="text-info">Ingredients:</strong>
                                <ul>
                                    {
                                        ingredients?.map(list => <li className="text-capitalize" key={list}>
                                            {list}
                                        </li>)
                                    }
                                </ul>
                            </Card.Text>

                            <Card.Text className="text-white"><strong className="text-info">Cooking Method:</strong> {cookingMethod}</Card.Text>
                        </div>
                    </Card.Body>

                    <Card.Footer>
                        <Stack direction="horizontal">
                            <div>
                                <small className="text-white">
                                    <Rating
                                        placeholderRating={rating}
                                        emptySymbol={<FaRegStar />}
                                        placeholderSymbol={<FaStar className="text-warning" />}
                                        fullSymbol={<FaStar />}
                                    />
                                </small>
                            </div>

                            <div className="ms-auto">
                                <Button onClick={handleBookmark} disabled={disabled} variant="warning">
                                    <FaBookmark className="text-white" />
                                </Button>
                                <ToastContainer />
                            </div>
                        </Stack>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Col>
    );
};

export default RecipeCard;