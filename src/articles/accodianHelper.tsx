import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import BackNav from './BackNav';


const accordianHelper = (title: string, body: string) => {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {title}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>{body}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default accordianHelper;