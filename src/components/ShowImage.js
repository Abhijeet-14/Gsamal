import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import cross from '../shared/cross3.png'

import windowSize from 'react-window-size'


function ShowImage(props) {

    const [dim, setDim] = useState({
        height: 0,
        width: 0,
    })

    useEffect(
        () => {
            setDim({ ...dim, height: props.windowHeight, width: props.windowWidth })
        }, [props.windowWidth, props.windowHeight]
    )
    
    console.log(props)

    return (
        <div >
            <Container
                className=""
                style={{ width: dim.windth, height: "100%", zIndex: 5, margin: "20" }}
            >
                <Row
                    style={{ zIndex: 10, backgroundColor: "black", opacity:"0.9" }}
                >
                    <Col
                        className="text-right py-3"
                    >
                        {/* <img src={cross} alt={props.alt} onClick={cutImage} /> */}
                        {/* abc */}
                    </Col>
                </Row>
                <Row
                    style={{ zIndex: 10, backgroundColor: "black", opacity:"0.9" }}
                // className="px-5 py-5"
                >
                    <Col
                        style={{ width: "80%", height: "80%" }}
                        className="text-center"
                    >
                        <img src={props.img.imageLink} alt={props.img.imageTitle}
                        // className="rounded-circle float-right block-example border border-warning"
                        />
                    </Col >
                </Row>
                <Row
                    style={{ zIndex: 10, backgroundColor: "black", opacity:"0.9" }}
                    className="text-right"
                >
                    <Col className="py-2 text-center">
                        <span style={{ color: "white", fontFamily: "product sans", fontWeight: "bolder", fontSize: "1em" }}>
                            Image: {props.img.imageTitle}
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default windowSize(React.memo(ShowImage))    