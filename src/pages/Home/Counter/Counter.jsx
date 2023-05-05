import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div>
            <Row>
                <Col className="mb-2" sm={1} md={4}>
                    <Card className="text-center rounded-circle bg-warning p-5 border border-white border-5">
                        <Card.Body>
                            <Card.Title className="fs-1 fw-bolder">
                                <CountUp end={5000} />+
                            </Card.Title>
                            <Card.Text className="text-white fs-5">
                                People Likes
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="mb-2" sm={1} md={4}>
                    <Card className="text-center rounded-circle bg-warning p-5 border border-white border-5">
                        <Card.Body>
                            <Card.Title className="fs-1 fw-bolder">
                                <CountUp end={200} />+ 
                            </Card.Title>
                            <Card.Text className="text-white fs-5">
                                Number of Recipes in Total
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="mb-2" sm={1} md={4}>
                    <Card className="text-center rounded-circle bg-warning p-5 border border-white border-5">
                        <Card.Body>
                            <Card.Title className="fs-1 fw-bolder">
                                <CountUp end={20} />
                            </Card.Title>
                            <Card.Text className="text-white fs-5">
                                Years of Successful Journey
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Counter;