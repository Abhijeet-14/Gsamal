import React from 'react'
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap'

import demo from '../shared/Samal.jpg'

// import styled from '@emotion/styled'

// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Experience() {

    function block( heading, supervisor, position, duration, content, link) {
        return (
            <Card border="warning"
                // style={{ width: "20rem", height: "100%" }}
                className="mt-sm-5 mt-md-5 mx-md-4 mx-sm-3" 
            >
                <Card.Img variant="top" src="demo/100px180?text=Image cap" alt="Image"/>
                <Card.Body>
                    <Card.Title>{heading}</Card.Title>
                    <Card.Subtitle>
                        {supervisor}
                    </Card.Subtitle>
                    <Row>
                        <Col className="text-left">
                            {position}
                        </Col>
                        <Col className="text-right">
                            {duration}
                        </Col>
                    </Row>
                    <Card.Text>
                        <i class="fas fa-map-marker-alt my-2">
                            {content} <Card.Link target="_blank" href={link} className="text-right">See More</Card.Link>
                        </i>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <Container className="py-5" id="experience" style={{ backgroundColor: "" }}>
            <h2 className="my-4 d-flex justify-content-center" style={styles.software}>EXPERIENCE</h2>
            <hr />
            <Row className="mt-5">
                <Col>
                    <CardGroup >
                        {
                            block(
                                "Hindustan Aeronautics Limited",
                                "Supervisor: Priyabrata Mallick",
                                "Research Intern",
                                "May - July 2019",
                                `Performed qualitative and quantitative assessment of 6th Generation fighter aircraft.
                                Optimized the process parameters for plasma coating of L.D. Sludge powder on AISI 304 SS.
                                Characterized the powder’s chemical composition, particle size and morphology.`,
                                "https://gourav-samal.netlify.com"
                            )
                        }

                        {
                            block(
                                "Diagnostics Via Disk",
                                "Advisor: Prof. A. Gopinath, MIT",
                                "Project lead",
                                "Jan - July 2020",
                                `Developed a cheap CD/DVD drive based laser equipment for preparing bio-assays on CD/DVD discs to detect COVID 19, Malaria & perform antibody/antigen tests, rapid colorimetric tests; with high specificity and sensitivity.   `,
                                "https://gourav-samal.netlify.com"
                            )
                        }
                    </CardGroup>
                    
                    <CardGroup className="" style={styles}>

                        {
                            block(
                                "Investigation of LD Sludge coatings as a potential TBC",
                                "Supervisor: Dr. Ajit Behera",
                                "Lead Researcher",
                                "July 2019 - March 2020",
                                "Investigated the thermal and oxidation properties of the LD sludge plasma coatings at 873K using TG-DSC. Investigated the wear resistance, micro-hardness distribution along the surface and depth of the substrate and various defects in the plasma coated sample.",
                                "https://gourav-samal.netlify.com"
                            )
                        }
                    </CardGroup>
                </Col>
            </Row>
        </Container >
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
