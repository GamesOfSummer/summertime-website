import { combineReducers } from 'redux';
import pictureReducer from './pictureReducer';

const rootReducer = combineReducers({
    pictureReducer,
});

export default rootReducer;
