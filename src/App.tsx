import React from 'react';
import { MDBContainer } from 'mdbreact';
import Main from './Main';
import './App.css';

const App = () => {
    const styles = {
        padding: '0px',
        fontFamily: 'futura',
    };

    return (
        <MDBContainer fluid style={styles}>
            <Main />
        </MDBContainer>
    );
};

export default App;
