import { MDBRow, MDBAnimation } from 'mdbreact';
import React from 'react';
import CardExample from './Card';

const Cards = () => {
    return (
        <MDBAnimation type="fadeIn" delay="0.0s">
            <MDBRow>
                {CardExample(
                    'Git Alias',
                    '/freebies/gitalias',
                    'Supercharge your git-fu!'
                )}
                {CardExample('React App Checklist', '', '')}
                {CardExample('The Books you Need to Read', '', '')}
                {CardExample('Problems in the Workplace', '', '')}
            </MDBRow>
        </MDBAnimation>
    );
};

export default Cards;
