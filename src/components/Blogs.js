import React,{useState} from 'react'
import { Container, Col, Row, CardGroup, Card, Carousel } from 'react-bootstrap'
import styled from '@emotion/styled'

export default function Projects() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    return (
        <Container className="py-5" id="blogs" style={{ backgroundColor: "" }}>
            <h2 className="my-4 d-flex justify-content-center" style={styles.software}>BLOGS/ARTICLES</h2>
            <hr />
            <Row className="mt-5">
                <Col>
                    <CardGroup className="mx-auto" style={styles}>
                        <Card className="mt-sm-0 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            The pistol shrimp is a remarkable creature about 4 cm in length and 25 grams in weight.
                            Despite its small size, it can move its claws at a speed of 97 km/hr.
                            The speed of the snap is such that a bubble is created consisting of vacuum.
                            The internal low pressure causes a water pulse that immobilizes prey with an associated noise of 218 dB
                            which is louder than a bullet, and reportedly a temperature of 4800 degrees centigrade which is similar
                            to the surface temperature of the sun, albeit over a very small area.

                            Additionally, there is a brief flash of light.
                            A pressure of 80 kPa at a distance of 4 cm from the claw has been measured,
                            with the water jet traveling at 25 m/sec, enough to kill a small fish and
                            it is this pressure which is significant for stunning prey rather than the heat and light.
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <Row >
                <Col class="ml-5 text-right" style={{ backgroundColor: "green", height: "40%", width: "40%" }}>
                    <CardGroup className="mx-auto" style={styles}>
                        <Card className="mt-sm-0 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            <span>
                                The Rise of Stainless Steel
                            </span>
                            <span>
                                Feat. SpaceX Starship
                            </span>

                            Elon Musk’s new Mars rocket looks like it’s brought straight out of a H.G. Wells dream of
                            the future. It doesn’t look like any current generation rocket by any shape or measure.
                            It’s shorter and bulkier than any typical rocket.Most surprising of all;
                            it’s made out of Stainless Steel. Stainless Steels have been forgotten since the 1960’s for
                            making propellant tanks as seen in the famous Atlas rockets. Then why does Elon want to use it?
                        </Card>
                    </CardGroup>
                    
                </Col>
            </Row>
        </Container>
    )
}

const styles = {
    software: {
        fontFamily: "Arial",
        fontSize: "32px",
        fontWeight: "bold",
        color: "#05004E"
    }
}





//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
