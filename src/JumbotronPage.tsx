import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const JumbotronPage = () => {
    const history = useHistory();

    function handleClick() {
        history.push('/aboutme');
    }

    return (
        <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary" onClick={handleClick}>
                    Hire Me!
                </Button>
            </p>
        </Jumbotron>
    );
};

export default JumbotronPage;
