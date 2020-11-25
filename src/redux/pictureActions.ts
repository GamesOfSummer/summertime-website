/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { takeLatest } from 'redux-saga/effects';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export enum pictureActionsEnum {
    asyncGetPictures = 'asyncGetPictures',
}

export function* asyncGetPictures(): any {
    try {
        yield delay(5000);
        // eslint-disable-next-line no-console
        console.log('Ping');
    } catch (e) {
        throw new Error(e.message);
    }
}

export const callAsyncGetPictures = () => ({
    type: pictureActionsEnum.asyncGetPictures,
});

export function* watchAsyncGetPictures() {
    yield takeLatest(pictureActionsEnum.asyncGetPictures, asyncGetPictures);
}
