import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const BackNav = () => {
    const history = useHistory();

    function handleClick() {
        history.push('/');
    }

    return (
        <div>
            <Button variant="primary" onClick={handleClick}>
                Back
            </Button>
        </div>
    );
};

export default BackNav;
