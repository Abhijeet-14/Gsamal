import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

import windowSize from 'react-window-size'

import blog1 from '../shared/images/blog.png'

import blog1_img0 from '../shared/images/b1_0.jpeg'
// import blog1_img1 from '../shared/b1_1.jpeg'
// import blog1_img2 from '../shared/b1_2.jpeg'
// import blog1_img3 from '../shared/b1_3.jpeg'
// import blog1_img4 from '../shared/b1_4.jpeg'
// import blog1_img5 from '../shared/b1_5.jpeg'


import db from '../shared/db/mycarousel.json'

const images = [blog1, blog1_img0]




function MyCarousel({ windowWidth, windowHeight }) {
    const [index, setIndex] = useState(0);
    const [size, setSize] = useState(false);

    useEffect(
        () => windowWidth < 850 ? setSize(false) : setSize(true)
        , [windowWidth]
    )

    const handleNext = () => {
        var newIndex = index + 1;
        if (newIndex > images.length - 1)
            newIndex = 0;
        setIndex(newIndex);
    }

    const handlePrev = () => {
        var newIndex = index - 1;
        if (newIndex < 0)
            newIndex = images.length - 1;
        setIndex(newIndex);
    }

    console.log("width: "+ windowWidth);
    // console.log(windowHeight);
    return (
        <>
            <h2 className="my-4 d-flex justify-content-center" style={styles.software}>BLOGS</h2>
            <hr />
        <Container style={styles.container} className="mb-5 mt-5">
            <Row style={styles.Row}>
                {size &&
                    <Col style={styles.Col} >
                        <Image src={images[index]} style={{ width: "100%", height: "100%" }} />
                    </Col>
                }
                <Col style={styles.Col}>
                    {!size &&
                        <Col style={styles.Col} className="mb-3">
                            <Image src={images[index]} style={{ width: "100%", height: "100%" }} />
                        </Col>
                    }
                    <Card style={styles.Card}>
                        <Card.Body style={styles.Card}>
                            <Card.Title>{db.details[index].titles}</Card.Title>
                            <Card.Text>
                                {db.details[index].bodies} 
                                <a href={db.details[index].pageLink} target="_blank"> Read More..</a>
                            </Card.Text>
                            <Card.Link>
                            </Card.Link>
                            <Row className="mt-3 mx-auto">
                            <Button variant="primary"
                                onClick={handlePrev}
                                className="mr-2"
                            >
                                prev
                            </Button>
                            <Button variant="primary"
                                onClick={handleNext}
                            >
                                next
                            </Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default windowSize(MyCarousel);


const styles = {
    container:{
        backgroundColor: "#222",
        color: "#fff",
        padding: "1%"
    },
    Card: {
        backgroundColor: "#333",
    }
}