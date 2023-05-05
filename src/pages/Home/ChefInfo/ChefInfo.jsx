import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaRegNewspaper, FaRegThumbsUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefInfo = ({ information }) => {
    // console.log(information);

    // Info.s are destructured and coming from the backend-server
    const { chefId, chefPictureUrl, chefName, yearsOfExperience, numRecipes, numLikes } = information;

    // For Card to Food Recipe Button
    const navigate = useNavigate();

    return (
        <Col md={4}>
            <Card className="text-center bg-dark gap-4 m-3 rounded border border-white border-5">
                {/* This React-BS LazyLoad will work while cards info.s are fetched from the server */}
                <LazyLoad>
                    <Card.Img variant="top" src={chefPictureUrl} />
                </LazyLoad>

                {/* Home Page : 6 Cards are designed */}
                <Card.Body>
                    <Card.Title className="text-warning">{chefName}</Card.Title>

                    <Card.Text className="text-info fs-6"><strong>{yearsOfExperience} Years of Experiences</strong></Card.Text>

                    <Card.Text className="text-white"><FaRegNewspaper /> <strong>Number of Recipes: {numRecipes}</strong></Card.Text>

                    <Card.Text className="text-white"><FaRegThumbsUp /> <strong>People Likes: {numLikes}</strong></Card.Text>

                    {/* This button will navigate the user to the main chef recipe private-route page dynamically from the user */}
                    <Button className="border border-white border-2" onClick={() => navigate(`recipe/${chefId}`)} variant="warning">View Recipes</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefInfo;