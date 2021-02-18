import {all} from "redux-saga/effects";
import { dayActionWatcher } from './daySaga';
import { weekActionWatcher} from './weekSaga';

export function* rootSaga() {
    yield all([
        dayActionWatcher(),
        weekActionWatcher()
    ])
}