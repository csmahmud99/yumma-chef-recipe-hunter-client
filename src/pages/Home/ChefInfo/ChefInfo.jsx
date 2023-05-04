import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaRegNewspaper, FaRegThumbsUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefInfo = ({ information }) => {
    // console.log(information);

    const { chefId, chefPictureUrl, chefName, yearsOfExperience, numRecipes, numLikes } = information;

    const navigate = useNavigate();

    return (
        <Col md={4}>
            <Card className="text-center bg-dark gap-4 m-3">
                <LazyLoad>
                    <Card.Img variant="top" src={chefPictureUrl} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title className="text-warning">{chefName}</Card.Title>
                    <Card.Text className="text-info fs-6"><strong>{yearsOfExperience} Years of Experiences</strong></Card.Text>
                    <Card.Text className="text-white"><FaRegNewspaper /> <strong>Number of Recipes: {numRecipes}</strong></Card.Text>
                    <Card.Text className="text-white"><FaRegThumbsUp /> <strong>People Likes: {numLikes}</strong></Card.Text>
                    <Button onClick={() => navigate(`recipe/${chefId}`)} variant="warning">View Recipes</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefInfo;