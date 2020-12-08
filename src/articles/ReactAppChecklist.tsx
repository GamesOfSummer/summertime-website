import React from 'react';
import { Accordion, Button, Card, Col } from 'react-bootstrap';
import BackNav from './BackNav';

const ReactAppChecklist = () => {
    return (
        <Col>
            <BackNav />
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                        >
                            React - Using Functional Components + Hooks
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Why - Because Classes are the old and more verbose
                            way to do things.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="1"
                        >
                            Typescript
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            Using Typescript forces Javascript to be a
                            statically typed language.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Col>
    );
};

export default ReactAppChecklist;
