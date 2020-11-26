/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { call, takeLatest } from 'redux-saga/effects';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export enum pictureActionsEnum {
    asyncGetPictures = 'asyncGetPictures',
}

export function* asyncGetPictures(): any {
    try {
        // eslint-disable-next-line no-console
        console.log('asyncGetPictures()');
        // eslint-disable-next-line no-console
        // const user = yield call(Api.fetchUser, action.payload.userId);
        yield delay(2000);
        // eslint-disable-next-line no-console
        console.log('asyncGetPictures()');
    } catch (e) {
        throw new Error(e.message);
    }
}

export const callAsyncGetPictures = () => ({
    type: pictureActionsEnum.asyncGetPictures,
});

export function* watchAsyncGetPictures() {
    console.log('asyncGetPictures()');
    yield takeLatest(pictureActionsEnum.asyncGetPictures, asyncGetPictures);
}
