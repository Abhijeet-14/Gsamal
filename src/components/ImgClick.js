import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ImgClick(props) {
    console.log("Rendering Image of: ", props.children)

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