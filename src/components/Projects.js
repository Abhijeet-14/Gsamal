import React from 'react'
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap'
// import styled from '@emotion/styled'

import db from '../shared/db/projects.json'

export default function Projects() {


    const projects = db.projects.map((project) => {
        return block(project.title, project.content, project.duration, project.link, project.reference)
    })

    function block(title, content, duration, link, reference) {
        return (
            <Card //border="warning"
                style={{ borderBlockColor: "orange" }}
                className="mt-sm-5 mt-md-5 mx-md-4 mx-sm-3"
            >
                <Card.Body>
                    <Card.Title className="mb-3"><h4>{title}</h4></Card.Title>
                    {reference !== "" && <Card.Subtitle className="mb-2 text-left">
                        <b>Reference: </b>{reference}
                    </Card.Subtitle>
                    }
                    <Row className="mb-2">
                        <Col className="">
                            {duration}
                        </Col>
                    </Row>
                    <Card.Text className="mb-1">
                        <i className="fas fa-map-marker-alt">
                            {content}
                        </i>
                    </Card.Text>
                    {link !== "" && <Card.Link target="_blank" href={link} className="text-right mb-1">Project Link</Card.Link>}
                </Card.Body>
            </Card >
        )
    }

    return (
        <Container className="py-5" id="projects" style={{ backgroundColor: "" }}>
            <h2 className="my-4 d-flex justify-content-center" style={styles.software}>PROJECTS</h2>
            <hr />
            <Row className="mt-5">
                <Col>
                    <CardGroup className="" style={styles}>
                        {projects}
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
