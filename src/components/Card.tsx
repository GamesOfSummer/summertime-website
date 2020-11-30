import React from 'react';
import _ from 'lodash';
import { Button, Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Store } from '../types/store';

const getPicture = () => {
    const state = useSelector((localState: Store) => localState);

    if (state && state.pictures && state.pictures.pictures.length > 0) {
        const index = _.random(0, state.pictures.pictures.length);
        return state.pictures.pictures[index].src.medium;
    }

    return '';
};

const CardExample = (title: string, route: string, summary: string) => {
    const history = useHistory();

    function handleClick() {
        history.push(route);
    }

    return (
        <Col>
            <Card.Img variant="top" src={getPicture()} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{summary}</Card.Text>
                <Button variant="primary" onClick={() => handleClick()}>
                    Read More
                </Button>
            </Card.Body>
        </Col>
    );
};

export default CardExample;
