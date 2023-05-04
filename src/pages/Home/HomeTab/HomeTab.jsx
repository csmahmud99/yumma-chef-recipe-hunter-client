import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import leftBanner from "../../../assets/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg";

const HomeTab = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={1} md={6}>
                        <img src={leftBanner} alt="leftImage" className="img-fluid" style={{ maxHeight: "50rem" }} />
                    </Col>
                    <Col sm={1} md={6} className="bg-dark rounded p-3 text-white">
                        <Tabs
                            defaultActiveKey="home"
                            id="justify-tab-example"
                            className="mb-3 bg-dark text-white"
                            justify
                        >
                            <Tab eventKey="home" title="Rice" className="bg-dark">
                                Rice, a staple food in many cultures, is prepared in various delectable forms across the world. Among the diverse rice items, two popular dishes stand out: Biryani and Pulao. Biryani, known for its aromatic flavors and rich spices, is a savory delight that combines basmati rice with meat or vegetables. This dish is typically cooked in layers, with each layer featuring fragrant rice and marinated protein or vegetables, resulting in a harmonious blend of flavors. The distinctiveness of biryani lies in its preparation technique, where the rice and meat or vegetables are cooked separately and then combined, allowing the flavors to intermingle perfectly.

                                On the other hand, Pulao offers a milder and more subtle taste compared to biryani. It is a one-pot dish where the rice and meat or vegetables are cooked together, infusing the flavors throughout the dish. Pulao showcases a delicate balance of spices and ingredients, highlighting the natural essence of the main components. The grains of rice in pulao remain separate and fluffy, adding to the visual appeal of the dish. While biryani is known for its robust and bold flavors, pulao offers a gentler taste that is enjoyed by those who prefer a lighter and less spicy option.

                                Both biryani and pulao have their distinct regional variations. Biryani can be found in various styles such as Hyderabadi, Lucknowi, Kolkata, and many more, each with its unique blend of spices and techniques. Similarly, pulao has different regional variations like vegetable pulao, chicken pulao, and biryani-inspired pulaos, which offer a range of choices to cater to diverse palates.

                                In conclusion, biryani and pulao are both rice dishes cherished for their individual characteristics. Biryani captivates with its intricate layers and bold flavors, while pulao entices with its delicate and harmonious blend. Whether you seek an aromatic and spicy affair or a milder and subtler experience, these rice items cater to a wide range of preferences, making them beloved choices among rice enthusiasts worldwide.
                            </Tab>
                            <Tab eventKey="profile" title="Soup">
                                Soup is a versatile dish that can be made in countless ways, with a wide variety of ingredients. The differences between soup items can be found in the type of broth used as the base, the main ingredients, the seasoning and spices, and the texture of the final product. For example, vegetable soup usually has a clear or light broth, with a mix of chopped vegetables, such as carrots, celery, and onions. Minestrone, on the other hand, is a thick and hearty soup made with beans, pasta, and a tomato-based broth. Chicken noodle soup is a classic comfort food made with a rich, flavorful chicken broth, tender chicken pieces, and egg noodles. Creamy soups, such as broccoli or tomato, are made with heavy cream or milk and have a smooth, velvety texture. Finally, there are also spicy soups, such as gumbo or chili, which pack a punch with their combination of hot peppers and spices. With so many options, there is a soup out there for every taste and preference.
                            </Tab>
                            <Tab eventKey="longer-tab" title="Drinks">
                                There are a wide variety of drinks available, each with their own unique characteristics and flavors. Alcoholic beverages such as beer, wine, and spirits are popular choices for those looking to unwind and socialize. Beer comes in many varieties, from light lagers to dark stouts, while wine can range from crisp whites to bold reds. Spirits like vodka, whiskey, and tequila offer complex flavors that can be enjoyed neat or in a mixed drink.

                                Non-alcoholic beverages like water, soda, and juice are also popular choices. Water is essential for hydration and can be consumed plain or flavored with fruits and herbs. Soda comes in a wide range of flavors and is often carbonated, providing a refreshing fizz. Juice is made from fruits and vegetables and can be enjoyed on its own or as a mixer in cocktails.

                                Coffee and tea are also widely consumed beverages, often enjoyed for their caffeine content and soothing effects. Coffee can be brewed in many ways, from drip coffee to espresso, and can be customized with cream and sugar. Tea comes in many varieties, from black to green to herbal, and can be enjoyed hot or cold.

                                Overall, the variety of drinks available ensures that there is something for every taste preference and occasion.
                            </Tab>
                            <Tab eventKey="contact" title="FastFood">
                                Fast food is a popular type of food that is usually served in a fast and convenient way. Fast food items are typically high in calories, fat, and sodium, and are often criticized for their lack of nutritional value. However, many people enjoy fast food as a quick and easy meal option. Some popular fast food items include burgers, fries, pizza, tacos, and sandwiches.

                                Burgers are a staple of fast food restaurants and are made from a ground beef patty served on a bun with toppings such as lettuce, tomato, and cheese. Fries are a common side dish and are usually fried in oil until crispy and golden brown. Pizza is another popular fast food item that is typically made with a dough crust, tomato sauce, and cheese, and can be topped with a variety of ingredients, such as pepperoni, mushrooms, and onions.

                                Tacos are a popular fast food item that is usually made with a soft or hard shell and filled with ingredients such as seasoned ground beef or chicken, lettuce, cheese, and salsa. Sandwiches are another popular fast food option, with many varieties available such as chicken sandwiches, fish sandwiches, and veggie sandwiches.

                                Each fast food item has its own distinct flavor and can be customized to suit individual preferences. Fast food restaurants often offer a range of options, including vegetarian and gluten-free options, to cater to different dietary needs.

                                While fast food is often criticized for being unhealthy, many fast food restaurants are now offering healthier options, such as salads and grilled chicken sandwiches. In addition, some fast food restaurants are now offering plant-based options, such as veggie burgers and vegan nuggets.

                                Overall, fast food items are a popular and convenient meal option, but it is important to consume them in moderation and to make sure to incorporate a balanced and healthy diet.
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeTab;