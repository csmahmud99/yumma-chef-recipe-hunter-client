import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaRegNewspaper, FaRegThumbsUp } from 'react-icons/fa';

const ChefInfo = ({ information }) => {
    // console.log(information);

    const { chefId, chefPictureUrl, chefName, yearsOfExperience, numRecipes, numLikes } = information;

    return (
        <Col md={4}>
            <Card className="text-center bg-dark gap-4 m-3">
                <Card.Img variant="top" src={chefPictureUrl} />
                <Card.Body>
                    <Card.Title className="text-warning">{chefName}</Card.Title>
                    <Card.Text className="text-info"><h6>{yearsOfExperience} Years of Experiences</h6></Card.Text>
                    <Card.Text className="text-white"><FaRegNewspaper /> <strong>Number of Recipes: {numRecipes}</strong></Card.Text>
                    <Card.Text className="text-white"><FaRegThumbsUp /> <strong>People Likes: {numLikes}</strong></Card.Text>
                    <Button variant="warning">View Recipes</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefInfo;