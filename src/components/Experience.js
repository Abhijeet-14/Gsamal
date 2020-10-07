import React from 'react'
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap'
import styled from '@emotion/styled'

// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Projects() {
    return (
        <Container className="py-5" id="experience" style={{ backgroundColor: "" }}>
            <h2 className="my-4 d-flex justify-content-center" style={styles.software}>EXPERIENCE</h2>
            <hr />
            <Row className="mt-5">
                <Col>
                    <CardGroup className="mx-auto" style={styles}>
                        <Card className="mt-sm-0 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                {/* <FontAwesomeIcon icon={faHome} /> */}
                                Hindustan Aeronautics Limited
                            </span>
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                Supervisor: Priyabrata Mallick
                            </span>
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                Research Intern May 2019 - July 2019
                            </span>
                            <i class="fas fa-map-marker-alt"></i>
                            Performed qualitative and quantitative assessment of 6th Generation fighter aircraft.
                            Optimized the process parameters for plasma coating of L.D. Sludge powder on AISI 304 SS.
                            Characterized the powder’s chemical composition, particle size and morphology.
                        </Card>

                        <Card className="mt-sm-0 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                Diagnostics Via Disk
                            </span>
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                Advisor: Prof. A. Gopinath, MIT
                            </span>
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                Project lead
                            </span>
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                January 2020 - July 2020
                            </span>
                            Developed a cheap CD/DVD drive based laser equipment for preparing bio-assays on CD/DVD discs to detect COVID 19, Malaria & perform antibody/antigen tests, rapid colorimetric tests; with high specificity and sensitivity.
                        </Card>

                        <Card className="mt-sm-0 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                Investigation of LD Sludge coatings as a potential TBC
                            </span>
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                Supervisor: Dr. Ajit Behera
                            </span>
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                Lead Researcher
                            </span>
                            <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                July 2019 - March 2020
                            </span>

                            Investigated the thermal and oxidation properties of the LD sludge plasma coatings at 873K using TG-DSC. Investigated the wear resistance, micro-hardness distribution along the surface and depth of the substrate and various defects in the plasma coated sample.
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
