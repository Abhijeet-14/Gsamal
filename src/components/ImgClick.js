import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ImgClick(props) {

    return (

        <Container
            onClick={props.handleClick} >
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container >


    )
}

export default React.memo(ImgClick)