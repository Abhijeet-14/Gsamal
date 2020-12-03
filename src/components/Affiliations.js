import React from 'react'
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap'

import db from '../shared/db/affiliations.json'

import windowSize from 'react-window-size'

// import styled from '@emotion/styled'


function Affiliations() {

    function block(title, duration, content, id) {
        return (
            <Card //border="warning"
                style={{ borderBlockColor: "orange" }}
                className="mt-sm-5 mt-md-5 mx-md-4 mx-sm-3"
            >
                <Card.Body>
                    <Card.Title className="mb-2"><h5>{title}</h5></Card.Title>
                    <Row className="mb-2">
                        <Col className="">
                            {duration}
                        </Col>
                    </Row>
                    <Card.Text>
                        <i className="fas fa-map-marker-alt">
                            {content}
                        </i>
                    </Card.Text>
                </Card.Body>
            </Card >
        )
    }

    const listItems1 = db.affiliations.map((affiliation) => {
        return block(affiliation.title, affiliation.duration, affiliation.content, affiliation.id)
    });

    return (
        <Container className="py-5" id="affiliations" style={{ backgroundColor: "" }}>
            <h2 className="my-4 d-flex justify-content-center" style={styles.software}>Affiliations</h2>
            <hr />
            <Row className="mt-5">
                <Col>
                    <CardGroup >
                        {listItems1}
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default windowSize(Affiliations);

const styles = {
    software: {
        fontFamily: "Arial",
        fontSize: "32px",
        fontWeight: "bold",
        color: "#05004E"
    }
}

