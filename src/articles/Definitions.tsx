import React from 'react';
import { Accordion, Button, Card, Col } from 'react-bootstrap';
import BackNav from './BackNav';
import accordianHelper from './accodianHelper';
import { computeHeadingLevel } from '@testing-library/react';
import { isBreakOrContinueStatement } from 'typescript';


const Definitions = () => {
    return (
        <Col>
            <BackNav />
            <Accordion defaultActiveKey="0">
                {accordianHelper(
                    'Javascript',
                    `Javascript is a single threaded progrraming language. It conforms to the ECMA script standard. 
                    As per Wiki, it's  high evel, JIT, multiparadigm, curly bracket syntax, a dynamic typing system, with prototyped objecd orientation.`
                )}
                {accordianHelper(
                    ' A callback - Bonus - Redux Thunk',
                    `A function passed into another function as an argument to be executed later.
                    Can be sychronous or asynchronous. Redux thunks use this, as they are a function 
                    that wraps an expression for later evaulation. That last action must be a plain object.`
                )}
                 {accordianHelper(
                    ' closure',
                    `A function that remembers it's variables, outside of it - it you you pass that function elsewhere.`
                )}
                 {accordianHelper(
                    'test double',
                    `A replacement for a function used during a test. A spy checks effects without affecting the function.
                    A stub replaces the target function with another behavior. A mock is like a stub, but has built-in
                    verfication and can be used instead of another assertion. A fake is something like a faked database.`
                )}
                
                
            </Accordion>
        </Col>
    );
};

export default ReactAppChecklist;
