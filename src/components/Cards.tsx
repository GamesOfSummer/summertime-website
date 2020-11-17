import React from 'react';
import { Row } from 'react-bootstrap';
import CardExample from './Card';

const Cards = () => {
    return (
        <Row>
            {CardExample(
                'Git Alias',
                '/freebies/gitalias',
                'Supercharge your git-fu!'
            )}
            {CardExample('React App Checklist', '', '')}
            {CardExample('The Books you Need to Read', '', '')}
            {CardExample('Problems in the Workplace', '', '')}
        </Row>
    );
};

export default Cards;
