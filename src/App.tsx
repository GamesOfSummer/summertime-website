import React from 'react';
import { Container } from 'react-bootstrap';
import Main from './Main';
import './App.css';

const App = () => {
    const styles = {
        padding: '0px',
        fontFamily: 'futura',
    };

    return (
        <Container fluid style={styles}>
            <Main />
        </Container>
    );
};

export default App;
