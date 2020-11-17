import React from 'react';
import { Nav } from 'react-bootstrap';
// import Logo from './images/summertime_logo_small.png';

const NavBarPage = () => {
    return (
        <div>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavBarPage;
