import React from 'react';
import { Nav } from 'react-bootstrap';

const FooterPage = () => {
    return (
        <Nav className="justify-content-end" activeKey="/">
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Summertime Development LLC
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default FooterPage;
