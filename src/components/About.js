import React, { useState } from 'react'
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap'

import profile from '../shared/Samal.jpg'

import ShowImage from './ShowImage'
import ImgClick from './ImgClick'

export default function About(props) {
    const [image, setImage] = useState({
        showImage: false,
        imageLink: "Source Invalid",
        imageTitle: "Alt Invalid",
    })


    const handleImage = (src, alt) => {
        setImage({ ...image, showImage: false, imageLink: src, imageTitle: alt })
    }

    const handleCut = () => {
        setImage({ ...image, showImage: false, imageLink: "", imageTitle: "" })
    }

    const aboutMe = (
        <>
            <h3 style={{ color: "#05004E" }}>Metallurgical {'&'} Materials Engg.</h3>
            <p style={styles.btext} className="mt-4">
                I am an undergraduate student, pursuing B.TECH in METALLURGICAL {'&'} MATERIALS ENGINEERING,
                at <a href="https://nitrkl.ac.in" style={{ color: "#05004E" }} >
                    <strong>
                        National Institute of Technology, Rourkela.
                    </strong>
                </a>
                <br />

                A final year student at NIT Rourkela, pursuing Metallurgical and Materials engineering major and Mechanical engineering minor.

                Passionate about the application of Materials science to solve day to day problems faced by the masses. I have a knack for the bio inspired materials.

                My goal is to make a sustainable future with the help of Materials science and to solve the mysteries of nature through science and mimic it to make a better world.
            </p>
        </>
    )
    return (
        <>
            {image.showImage && <Container className="pb-5"
            >
                <Row className="pb-5">
                    <Col>
                        <ShowImage img={image} />
                    </Col>
                </Row>
            </Container>
            }

            {!image.showImage &&
                <Container
                    className="py-5 mt-0"
                    style={{ backgroundColor: "" }}
                    id="about"
                    fluid
                >
                    <h2 className="my-4 d-flex justify-content-center" style={styles.about}> ABOUT ME</h2>
                    <hr />
                    <Row style={styles.row} className={`py-3 mx-${props.proImg === 1 ? 3 : 0}`}>
                        <Col style={styles} className={`mx-${props.proImg === 1 ? 5 : 0} col`}>
                            {
                                props.proImg === 1
                                    ? <div className="mx-3 text-left">{aboutMe}</div>
                                    : <div className="mx-3 text-center">{aboutMe}</div>
                            }
                        </Col>

                        {props.proImg === 1 &&
                            <>
                                <Col className="w-25 col-3 my-auto text-center"
                                // style={{backgroundColor:"green"}} 
                                >
                                    <ImgClick handleClick={() => handleImage(profile, "Gourav Samal")}>
                                        <img src={profile} alt="Profile Image: Gourav Samal"
                                            className="rounded-circle float-right block-example border border-warning"
                                        />
                                    </ImgClick>
                                </Col>
                            </>
                        }


                    </Row>
                    {props.proImg === 0 &&
                        <>
                            <Row style={styles.row} className={`pt-0 pb-5 mx-auto text-center`}
                            // ${props.proImg === 1 ? 3 : 0}
                            >
                                <Col className="text-center my-auto mx-auto"
                                    // {/* <Col xs={12} xsOffset={6} */}
                                    style={styles.proCol}
                                    onClick={() => handleImage(image.showImage)}
                                >
                                    <div className="mx-auto text-center"
                                    // style={{backgroundColor:"red"}}
                                    >
                                        <ImgClick handleClick={() => handleImage(profile, "Gourav Samal")}>
                                            <img src={profile} alt="Profile Image: Gourav Samal" border="primary"
                                                className=" rounded-circle block-example border border-warning"
                                            />
                                        </ImgClick>
                                    </div>
                                </Col>
                                {/* <Col className="col-1"></Col> */}
                            </Row>
                        </>
                    }
                    <Row>
                        <Col className="mx-sm-5 mx-0">
                            <div className="mx-auto mx-sm-auto" style={{ height: ".1em", backgroundColor: "#05004E" }} >
                            </div>
                            <CardGroup className="mx-sm-4 mt-sm-4 my-4 text-center text-sm-left">

                                <Card className="mx-sm-4 mt-3 mt-sm-0 text-sm-left text-center" style={styles.card}>
                                    <Card.Title style={styles.title}>Phone</Card.Title>
                                    <Card.Text style={styles.text}> +91-7205778418</Card.Text>
                                </Card>

                                <Card className="mx-sm-4 text-sm-center " style={styles.card}>
                                    <Card.Title style={styles.title}>Email</Card.Title>
                                    <Card.Text style={styles.text}  >
                                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWPVqbXkpZXPbstFHRtvgTNWRQNtwVlRkBLnZGnWDLbvKhsCmxxLfZZGSXZlQzXvtjtmL" target="_blank">
                                            samalgourav2000@gmail.com
                                </a>
                                    </Card.Text>
                                </Card>

                                <Card className="mx-sm-4 text-sm-right text-center" style={styles.card}>
                                    <Card.Title style={styles.title}>University Email</Card.Title>
                                    <Card.Text style={styles.text}> 117MM0639@nitrkl.ac.in</Card.Text>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container >
            }
        </>
    )
}

const styles = {
    about: {
        fontFamily: "Arial",
        fontWeight: "bold",
        color: "#05004E"
    },
    btext: {
        fontSize: "18px",
        fontStyle: "product sans",
        color: "#05004E",
    },
    row: {
    },
    card: {
        backgroundColor: "#F9F8EB",
        border: 0,
        color: "#05004E",
    },
    title: {
        fontWeight: "bold",
        fontFamily: "Arial",
    },
    text: {
        fontSize: "1.1em",
        fontStyle: "italic",
    },
    proCol: {
        // alignItems:"center",
        // justifyContent:"center",
        // backgroundColor: "green",
    }
}