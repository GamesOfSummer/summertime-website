import React from 'react';
import { Accordion, Button, Card, Col } from 'react-bootstrap';
import BackNav from './BackNav';

const accordian = (title: string, body: string) => {
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

const ReactAppChecklist = () => {
    return (
        <Col>
            <BackNav />
            <Accordion defaultActiveKey="0">
                {accordian(
                    'React - Using Functional Components + Hooks',
                    'Why - Because Classes are the old and more verbose way to do things.'
                )}
                {accordian(
                    ' Typescript',
                    'Using Typescript forces Javascript to be a statically typed language.'
                )}
                {accordian(
                    'Redux',
                    'The instant your application gets big - ie, more than a few pages, or has a login system, you will need Redux or some other form of state management.'
                )}
                {accordian(
                    'Unit Tests',
                    'Unit tests mean cleaner code. They mean smaller code. If you cant test your code, you need to refactor it.'
                )}
                {accordian(
                    'eslint + Prettier',
                    'Both is best. eslint handles formatting and syntax errors, while Prettier forces the team to use the same formatting.'
                )}
                {accordian(
                    'Bonus - workspace file for Visua Studio Code',
                    'Sometimes, you dont need to see those C# files from the backend. Setup a workspace file to hide them.'
                )}
            </Accordion>
        </Col>
    );
};

export default ReactAppChecklist;
