import React from 'react';
import BannerHome from '../BannerHome/BannerHome';
import { useLoaderData } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import ChefInfo from '../ChefInfo/ChefInfo';
import Counter from '../Counter/Counter';
import HomeTab from '../HomeTab/HomeTab';

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

            <div className="bg-black p-5">
                <Counter />
            </div>

            <div className="bg-warning p-5">
                <HomeTab />
            </div>
        </div >
    );
};

export default Home;