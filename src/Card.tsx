import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const CardExample = (title: string, route: string, summary: string) => {
    return (
        <Col>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{summary}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Col>
    );
};

export default CardExample;
