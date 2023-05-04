import React from 'react';
import BannerHome from '../BannerHome/BannerHome';
import { useLoaderData } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import ChefInfo from '../ChefInfo/ChefInfo';

const Home = () => {
    const chefInformation = useLoaderData();
    // console.log(chefInformation);

    return (
        <div>
            {/* Home Banner Component Section */}
            <BannerHome />

            {/* Home Chef Information Section */}
            <div className="bg-warning py-5">
                <Container>
                    <h2 className="text-center">Visit Our Honorable Chefs</h2>
                    <hr />

                    <Row>
                        {
                            chefInformation?.map(information => <ChefInfo
                                key={information.chefId}
                                information={information}
                            />)
                        }
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Home;