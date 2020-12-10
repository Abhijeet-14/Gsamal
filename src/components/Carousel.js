import React, { useState } from "react";
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
} from "mdbreact";



const MultiCarouselPage = () => {

    const [index, setIndex] = useState(0)

    const next = () => {
        if (index === images.length - 1)
            setIndex(0)
        else
            setIndex(index => index + 1)
    }

    const prev = () => {
        if (index === 0)
            setIndex(images.length - 1)
        else
            setIndex(index => index - 1)

    }

    console.log(index)

    function block(itemId) {
        return (
            <MDBCarouselItem itemId={itemId}>
                <MDBRow>
                    <MDBCol md="5">
                        <MDBCard className="mb-2">
                            <MDBCardImage className="img-fluid" src={images[itemId]} />
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="7">
                        <MDBCard>
                            <MDBCardBody className="w-100">
                                <MDBCardTitle>
                                    {titles[itemId]}
                                </MDBCardTitle>
                                <MDBCardText>
                                    {bodies[itemId]}
                                </MDBCardText>
                                <MDBBtn color="primary">
                                    Button
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        {/* <button rounded onClick={prev} >
                            <span style={{ fontSize: "2rem", fontStyle: "italic", color: "" }}>&lt;</span>
                        </button>
                        <button rounded onClick={() => next()}>
                            <span style={{ fontSize: "2rem", fontStyle: "italic", color: "" }}>&gt;</span>
                        </button> */}
                    </MDBCol>
                </MDBRow>
            </MDBCarouselItem >
        )
    }


    return (
        <MDBContainer style={{ backgroundColor: "black" }} className="px-4 py-4">
            <MDBCarousel
                activeItem={6}
                length={6}
                slide={true}
                showControls={true}
                showIndicators={true}
                mobileGesture
                multiItem
                interval={2000}
                onHoverStop
                testimonial={true}
            >
                <MDBCarouselInner>
                    <MDBRow>
                        {block(0)}
                        {block(1)}
                        {block(2)}
                        {block(3)}
                        {block(4)}
                        {block(5)}
                        {block(6)}
                    </MDBRow>

                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default MultiCarouselPage;