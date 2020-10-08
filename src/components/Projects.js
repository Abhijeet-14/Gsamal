import React from 'react'
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap'
// import styled from '@emotion/styled'


export default function Projects() {
    return (
        <Container className="py-5" id="projects" style={{ backgroundColor: "" }}>
            <h2 className="my-4 d-flex justify-content-center" style={styles.software}>PROJECTS</h2>
            <hr />
            <Row className="mt-5">
                <Col>
                    <CardGroup className="mx-auto" style={styles}>
                        <Card className="mt-sm-0 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            DVD (Diagnostics via DVD)
                            Built a diagnostic equipment to diagnose COVID 19 which uses easily available lasers found in CD DVD players, which employs cost-effective sample preparation methods to provide fast and reliable results.

                            Website : https://www.hackster.io/laserx/diagnostics-via-disc-5793c0
                            Repo     : https://github.com/zray007/Diagnostics-via-Disk
                        </Card>
                        
                        <Card className="mt-sm-0 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            Microscopy Via DVD
                            The DVD based microscope is a special light microscope which uses a focused laser beam to scan the sample. The scanning is performed by driving the laser along the x and y axis. The image is processed by a custom software and the image is enhanced by using a Super resolution AI model.

                            Repo: https://github.com/zray007/AI_Microscopy_via_DVD
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <Row className="mt-sm-3 mt-0">
                <Col>
                    <CardGroup>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <Row className="mt-sm-3 mt-0">
                <Col>
                    <CardGroup>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <Row className="mt-sm-3 mt-0">
                <Col>
                    <CardGroup>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
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
