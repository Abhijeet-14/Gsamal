import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

import windowSize from 'react-window-size'

import blog from '../shared/images/blog.png'

import blog1_img0 from '../shared/b1_0.jpeg'
// import blog1_img1 from '../shared/b1_1.jpeg'
// import blog1_img2 from '../shared/b1_2.jpeg'
// import blog1_img3 from '../shared/b1_3.jpeg'
// import blog1_img4 from '../shared/b1_4.jpeg'
// import blog1_img5 from '../shared/b1_5.jpeg'

const images = [blog, blog1_img0]

const titles = [
    "Slide 1",
    "Slide 2",
    // "Slide 3",
    // "Slide 4",
    // "Slide 5",
    // "Slide 6",
    // "Slide 1"
]

const bodies = [
    "This is my slide 1",
    "This is my slide 2",
    // "This is my slide 3",
    // "This is my slide 4",
    // "This is my slide 5",
    // "This is my slide 6",
    // "This is my slide 1"
]


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
        <Container style={styles.container}>
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
                            <Card.Title>{titles[index]}</Card.Title>
                            <Card.Text>
                                {bodies[index]} 
                            </Card.Text>
                            <Button variant="primary"
                                onClick={handlePrev}
                            >
                                prev
                            </Button>
                            <Button variant="primary"
                                onClick={handleNext}
                            >
                                next
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
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