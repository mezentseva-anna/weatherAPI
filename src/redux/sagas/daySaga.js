import {call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_WEATHER_DAY} from "../actionTypes";
import {addWeatherDayAC, errDayAC} from "../actionCreators";
import {fetchDayLatAndLongitude, fetchDayQuery} from "../../utils/fetch/fetchDay";

export function* fetchWeatherWorker({payload}) {
    try {
        const dailyWeather = yield call(payload.longitude ? fetchDayLatAndLongitude : fetchDayQuery, payload);
        yield put(addWeatherDayAC(dailyWeather));
    } catch {
        yield put(errDayAC({status: true, message: 'City not found'}))
    }
}

export function* dayActionWatcher() {
    yield takeEvery(FETCH_WEATHER_DAY, fetchWeatherWorker)
}