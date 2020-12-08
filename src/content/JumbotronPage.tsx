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
            <h1>Howdy, let&apos;s code!</h1>
            <p>
                +11 years of expirence. This website has an MIT lisecene with
                React, Redux, and other goodes. Feel free to look at the code!
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
