// ****** Importing necessary components and from dependencies ******
import React from 'react';
import BannerHome from '../BannerHome/BannerHome';
import { useLoaderData } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import ChefInfo from '../ChefInfo/ChefInfo';
import Counter from '../Counter/Counter';
import HomeTab from '../HomeTab/HomeTab';

const Home = () => {
    // Fetched from server and this data is coming from 'Home.jsx' File
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

                    {/* Home Chef Information related 6 cards are coming from 'ChefInfo.jsx' File */}
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

            {/* Home Extra 01 : Overall Counter Card Section */}
            <div className="bg-black p-5">
                <Counter />
            </div>

            {/* Home Extra 02 : Food Item Category Description Section  */}
            <div className="bg-warning p-5">
                <HomeTab />
            </div>
        </div >
    );
};

export default Home;