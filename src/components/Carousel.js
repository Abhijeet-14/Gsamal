import React, { useState } from "react";
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
} from "mdbreact";

import blog1_img0 from '../shared/b1_0.jpeg'
import blog1_img1 from '../shared/b1_1.jpeg'
import blog1_img2 from '../shared/b1_2.jpeg'
import blog1_img3 from '../shared/b1_3.jpeg'
import blog1_img4 from '../shared/b1_4.jpeg'
import blog1_img5 from '../shared/b1_5.jpeg'

const images = [blog1_img0, blog1_img1, blog1_img2, blog1_img3, blog1_img4, blog1_img5]

const titles = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6"
]

const bodies = [
    "This is my slide 1",
    "This is my slide 2",
    "This is my slide 3",
    "This is my slide 4",
    "This is my slide 5",
    "This is my slide 6",
]



const MultiCarouselPage = () => {

    const [index, setIndex] = useState(0)

    const next = (id) => {
        if (id === images.length - 1)
            setIndex(0)
        else
            setIndex(id++)

    }

    const prev = (id) => {
        if (id === 0)
            setIndex(images.length - 1)
        else
            setIndex(id--)

    }


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
                            <MDBCardBody>
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
                    </MDBCol>
                </MDBRow>
            </MDBCarouselItem>
        )
    }


    return (
        <MDBContainer style={{backgroundColor:"black"}} className="mx-5 my-5">
            <MDBCarousel activeItem={0} length={6} slide={true} showControls={true} showIndicators={true}>
                <MDBCarouselInner>
                    <MDBRow>
                        <MDBCol className="d-flex justify-content-center">
                        <MDBBtn color="primary" size="lg" rounded  onClick={() => prev(index)}>
                            &lt;
                        </MDBBtn>
                        <MDBBtn color="primary" onClick={() => next(index)}>
                            &gt;
                        </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        {block(index)}
                    </MDBRow>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default MultiCarouselPage;