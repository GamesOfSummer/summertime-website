import React from 'react';
import {
    MDBJumbotron,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardTitle,
    MDBIcon,
} from 'mdbreact';
import { Link } from 'react-router-dom';

const JumbotronPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{ padding: 0 }}>
                        <MDBCol
                            className="text-white text-center py-5 px-4 my-5"
                            style={{
                                backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
                            }}
                        >
                            <MDBCol className="py-5">
                                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                                    I'm here to help!
                                </MDBCardTitle>
                                <p className="mx-5 mb-5">
                                    Over ten years of software development
                                    expierence. I love React and I love teaching
                                    what I know.
                                </p>
                                <MDBBtn outline className="mb-5">
                                    <MDBIcon
                                        icon="clone"
                                        className="mr-2"
                                    ></MDBIcon>{' '}
                                    <Link to="/aboutme">Hire Me!</Link>
                                </MDBBtn>
                            </MDBCol>
                        </MDBCol>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default JumbotronPage;
