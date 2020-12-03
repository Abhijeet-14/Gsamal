import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
// import styled from '@emotion/styled'

import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Blogs from './Blogs'
import Awards from './Awards'
import Affiliations from './Affiliations'

// import Carousel from './Carousel'
import MyCarousel from './MyCarousel'


import In from '../shared/insta3.png'
// import Gh from '../shared/gh4.png'
// import Yt from '../shared/yt2.png'

import windowSize from 'react-window-size'

function Center(props) {

    const [open, setOpen] = useState({
        proImg:0,
        blogs:1,
        experience:0,
        projects:0,
        software:0,
        myCarousel: 1,
        awards: 0,
        affilations: 0,
    });

    useEffect(
        () => props.windowWidth < 700 ? setOpen({ ...open, proImg: 0 }) : setOpen({ ...open, proImg: 1 })
        , [props.windowWidth]
    )

    return (
        <Container fluid
            style={styles.container}
            className="smooth-scroll"
            id="home"
        >
            <Row className="pt-2 pb-0 py-sm-0" style={styles.row} id="" >
                <Col className="py-auto py-lg-5 d-flex justify-content-center" style={styles.col}>
                    <Card className="mx-auto my-5 border-0" style={styles.card}>
                        <Card.Title className="mx-auto mb-0" style={styles.title}>
                            HI<span style={{ color: "#FD5F00", fontFamily: "product sans", fontWeight: "bolder" }}>,</span> I AM<br />
                                GOURAV<br />
                                SAMAL<span style={{ color: "#FD5F00", fontFamily: "Product Sans", fontWeight: "bolder" }}>.</span>

                        </Card.Title>
                        <Card.Text className="my-3" style={styles.text}>
                            <div>
                                METALLURGICAL {'&'} MATERIALS ENGINEERING<br />
                                 {/* {'&'}  */}
                            </div>
                            <Card.Link target="_blank" href="https://drive.google.com/file/d/14c4HNPQwqwutvpNN-gb_Y03fhDj0JlFJ/view">
                                <button className="mt-3 btn" type="button"
                                    style={{ backgroundColor: "#FD5F00", color: "#fff", height: "3em", width: "10.5em" }}
                                >
                                    Download Rèsumè
                                </button>
                            </Card.Link>
                        </Card.Text>
                        <div styles={styles.link} className="mx-auto mt-1">
                            <Card.Link href="https://www.linkedin.com/in/gourav-samal/"
                                target="_blank"
                                style={styles.link} >
                                <img src={In} alt="IN" />
                            </Card.Link>
                        </div>
                    </Card>
                </Col>
            </Row>
            <About proImg={open.proImg} />
            {open.projects === 0 && <Projects />}
            {open.experience === 0 && <Experience />}
            {open.blogs === 0 && <Blogs />}
            {open.awards === 0 && <Awards />}
            {open.affilations === 0 && <Affiliations />}
            {/* <Carousel /> */}
            {open.myCarousel === 0 && <MyCarousel />}

        </Container >
    )
}


const styles = {
    container: {
        backgronudColor: "#F9F8EB",
    },
    card: {
        backgroundColor: "#F9F8EB",
    },
    title: {
        // backgroundColor: "yellow",
        fontFamily: 'Product Sans , Arial',
        fontSize: "55px",
        fontWeight: "bold",
        textAlign: 'center',
        color: "#05004E",
    },
    text: {
        fontFamily: 'Product Sans , Arial',
        fontSize: "22px",
        fontWeight: "bold",
        textAlign: 'center',
        color: "#05004E",
        // backgroundColor: "pink"
    },
    link: {
        fontFamily: 'Product Sans , Arial',
        fontSize: "30px",
        fontWeight: "bold",
        color: "#05004E",
        textAlign: 'center',
    }
}


export default windowSize(Center);