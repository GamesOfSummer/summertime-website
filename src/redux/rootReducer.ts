import { combineReducers } from 'redux';
import { DefaultStore, Store } from '../types/store';

const initialState = DefaultStore();

const pictureReducer = (state: Store, action: any) => {
    if (state === undefined || action === undefined) {
        return initialState;
    }

    switch (action.type) {
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    pictureReducer,
});

export default rootReducer;
