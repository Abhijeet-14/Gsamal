import React from 'react'
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap'

import db from '../shared/db/awards.json'

import windowSize from 'react-window-size'

// import styled from '@emotion/styled'


function Awards() {

    function block(title, subtitle, year, id) {
        return (
            <Card // border="warning"
                style={{ borderBlockColor: "orange" }}
                className="mt-sm-5 mt-md-5 mx-md-4 mx-sm-3"
            >
                <Card.Body>
                    <Card.Title className="mb-2"><h5>{title}</h5></Card.Title>
                    <Row className="mb-2">
                        <Col className="text-left">
                            {subtitle}
                        </Col>
                        <Col className="text-right">
                            {year}
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
        )
    }

    const listItems1 = db.awards.map((award) => {
        if (award.id === 1 || award.id === 2 || award.id === 3)
            return block(award.title, award.subtitle, award.year, award.id)
    });
    const listItems2 = db.awards.map((award) => {
        if (award.id === 5 || award.id === 4 || award.id === 6)
            return block(award.title, award.subtitle, award.year, award.id)
    });

    return (
        <Container className="py-5" id="awards" style={{ backgroundColor: "" }}>
            <h2 className="my-4 d-flex justify-content-center text-center" style={styles.software}>AWARDS & SCHOLARSHIPS</h2>
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
        </Container>
    )
}

export default windowSize(Awards);

const styles = {
    software: {
        fontFamily: "Arial",
        fontSize: "32px",
        fontWeight: "bold",
        color: "#05004E"
    }
}

