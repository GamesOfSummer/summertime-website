/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export enum pictureActionsEnum {
    asyncGetPictures = 'asyncGetPictures',
}

export function* asyncGetPictures(): any {
    try {
        // eslint-disable-next-line no-console
        console.log('asyncGetPictures()');

        const headerParams = {
            Authorization: `563492ad6f9170000100000196cbe16d24264bd39f0ea60e3f1faa0b`,
        };

        const apiCall = () => {
            return axios
                .get('https://api.pexels.com/v1/curated?per_page=11&page=1', {
                    headers: headerParams,
                })
                .then((response: { data: any }) => response.data)
                .catch((err: any) => {
                    throw err;
                });
        };

        // const res = await fetch(request);
        // const { photos } = await res.json();

        const user = yield call(apiCall);
        // eslint-disable-next-line no-console
        console.log(
            '🚀 ~ file: pictureActions.ts ~ line 36 ~ function*asyncGetPictures ~ user',
            user
        );

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
