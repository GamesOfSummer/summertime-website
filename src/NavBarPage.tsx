import React from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBCollapse,
    MDBBtn,
} from 'mdbreact';

// import Logo from './images/summertime_logo_small.png';

const NavbarPage = () => {
    return (
        <div>
            <MDBNavbar style={{ backgroundColor: '#FD9F00' }} expand="md">
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBBtn style={{ backgroundColor: '#FFFFFF' }}>
                                Hire Me!
                            </MDBBtn>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </div>
    );
};

export default NavbarPage;
