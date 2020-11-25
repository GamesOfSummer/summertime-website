import React from 'react';
import { Container } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './content/Main';
import './App.css';
import rootReducer from './redux/rootReducer';

const store = createStore(
    rootReducer,
    // eslint-disable-next-line no-underscore-dangle
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        // eslint-disable-next-line no-underscore-dangle
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
    const styles = {
        padding: '0px',
        fontFamily: 'futura',
    };

    return (
        <Provider store={store}>
            <Container fluid style={styles}>
                <Main />
            </Container>
        </Provider>
    );
};

export default App;
