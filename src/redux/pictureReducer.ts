import { DefaultPicture, Picture } from '../types/picture';

const initialState = DefaultPicture();

const pictureReducer = (state: Picture, action: any) => {
    if (state === undefined || action === undefined) {
        return initialState;
    }

    switch (action.type) {
        default:
            return state;
    }
};

export default pictureReducer;
