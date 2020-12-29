import React from 'react';
import { Accordion, Button, Card, Col } from 'react-bootstrap';
import BackNav from './BackNav';
import accordianHelper from './accodianHelper';


const ReactAppChecklist = () => {
    return (
        <Col>
            <BackNav />
            <Accordion defaultActiveKey="0">
                {accordianHelper(
                    'React - Using Functional Components + Hooks',
                    'Why - Because Classes are the old and more verbose way to do things.'
                )}
                {accordianHelper(
                    ' Typescript',
                    'Using Typescript forces Javascript to be a statically typed language.'
                )}
                {accordianHelper(
                    'Redux',
                    'The instant your application gets big - ie, more than a few pages, or has a login system, you will need Redux or some other form of state management.'
                )}
                {accordianHelper(
                    'Unit Tests',
                    'Unit tests mean cleaner code. They mean smaller code. If you cant test your code, you need to refactor it.'
                )}
                {accordianHelper(
                    'eslint + Prettier',
                    'Both is best. eslint handles formatting and syntax errors, while Prettier forces the team to use the same formatting.'
                )}
                {accordianHelper(
                    'Bonus - workspace file for Visua Studio Code',
                    'Sometimes, you dont need to see those C# files from the backend. Setup a workspace file to hide them.'
                )}
            </Accordion>
        </Col>
    );
};

export default ReactAppChecklist;
