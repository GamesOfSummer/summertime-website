import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBCollapse,
    MDBBtn,
} from 'mdbreact';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Logo from './images/summertime_logo_small.png';

function NavbarPage() {
    const history = useHistory();

    return (
        <Router>
            <MDBNavbar style={{ backgroundColor: '#FD9F00' }} expand="md">
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav left>
                        <MDBNavbarBrand>
                            <img
                                src={Logo}
                                style={{ height: '100px' }}
                                onClick={() => history.push('/')}
                            />
                        </MDBNavbarBrand>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBBtn
                                style={{ backgroundColor: '#FFFFFF' }}
                                onClick={() => history.push('/aboutme')}
                            >
                                Hire Me!
                            </MDBBtn>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </Router>
    );
}

export default NavbarPage;
