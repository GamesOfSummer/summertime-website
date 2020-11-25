import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { Container } from 'react-bootstrap';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Main from './content/Main';
import './App.css';
import rootReducer from './redux/rootReducer';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 10 });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(invariant(), sagaMiddleware))
);

sagaMiddleware.run(mySaga);

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
