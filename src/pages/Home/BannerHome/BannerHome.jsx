import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from "../../../assets/yumma-home-banner-left.png";


const BannerHome = () => {
    return (
        <div>
            <div className="bg-dark text-white py-5">
                <Container>
                    <Row>
                        <Col sm={1} md={6}>
                            <img src={banner} alt="home-banner" className="rounded border border-warning border-5 img-fluid" />
                        </Col>

                        <Col sm={1} md={6} className="mt-3">
                            <p className="text-center text-info">Who We Are</p>
                            <h3 className="text-warning text-center">Yumma Chef Recipe</h3>
                            <p className="text-center">
                                Get all delicious food recipes from your favorite chef.
                            </p>
                            <hr />
                            <p className="text-center">
                                Welcome to Yumma! We offer easy-to-follow recipes for diverse dishes, catering to all tastes. Inspiring beginners and experienced chefs alike, our mission is to create delicious meals. Explore our collection and let's cook up something amazing together!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BannerHome;