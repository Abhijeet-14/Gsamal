import React from 'react'
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap'

import db from '../shared/db/experience.json'

import windowSize from 'react-window-size'

// import styled from '@emotion/styled'


function Experience(props) {


    function block(heading, supervisor, position, duration, content, topic, link, id) {
        return (
            <Card // border="warning"
                style={{ borderBlockColor: "orange" }}
                className="mt-sm-5 mt-md-5 mx-md-4 mx-sm-3"
            >
                {/* <Card.Img variant="top" src="demo/100px180?text=Image cap" alt="Image"/> */}
                <Card.Body>
                    <Card.Title><h4>{heading}</h4></Card.Title>
                    {supervisor !== "" && <Card.Subtitle className="mb-2">
                        <b>Supervisor: </b>{supervisor}
                    </Card.Subtitle>
                    }
                    {topic !== "" && <Row>
                        <Col className="text-left mb-2">
                            <b>Topic: </b>{topic}
                        </Col>
                    </Row>
                    }
                    <Row className="mb-2">
                        <Col className="text-left">
                            <b>Position: </b>{position}
                        </Col>
                        <Col className="text-right">
                            {duration}
                        </Col>
                    </Row>
                    <Card.Text>
                        <i className="fas fa-map-marker-alt">
                            {content}
                        </i>
                        {link !== "" && <Card.Link target="_blank" href={link} className="text-right">See More</Card.Link>}
                    </Card.Text>
                </Card.Body>
            </Card >
        )
    }

    const listItems1 = db.experience.map((experience) => {
        if (experience.id === 1 || experience.id === 2)
            return block(experience.heading, experience.supervisor, experience.position, experience.duration, experience.content, experience.topic, experience.link)
    });
    const listItems2 = db.experience.map((experience) => {
        if (experience.id === 3 || experience.id === 4)
            return block(experience.heading, experience.supervisor, experience.position, experience.duration, experience.content, experience.topic, experience.link)
    });

    return (
        <Container className="py-5" id="experience" style={{ backgroundColor: "" }}>
            <h2 className="my-4 d-flex justify-content-center" style={styles.software}>EXPERIENCE</h2>
            <hr />
            <Row className="mt-5">
                <Col>
                    <CardGroup >
                        {listItems1}
                    </CardGroup>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <CardGroup className="" style={styles}>
                        {listItems2}
                    </CardGroup>
                </Col>
            </Row>
        </Container >
    )
}

export default windowSize(Experience);

const styles = {
    software: {
        fontFamily: "Arial",
        fontSize: "32px",
        fontWeight: "bold",
        color: "#05004E"
    }
}

