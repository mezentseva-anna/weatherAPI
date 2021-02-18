import {call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_WEATHER_WEEK} from "../actionTypes";
import {addWeatherWeekAC, errDayAC} from "../actionCreators";
import {fetchWeekLatAndLongitude, fetchWeekQuery} from "../../utils/fetch/fetchWeek";

function* fetchWeatherWorker({payload}) {
    try {
        const weekWeather = yield call(payload.longitude ? fetchWeekLatAndLongitude : fetchWeekQuery, payload)
        yield put(addWeatherWeekAC(weekWeather))
    } catch {
        yield put(errDayAC({status: true, message: 'City not found'}))
    }
}

export function* weekActionWatcher() {
    yield takeEvery(FETCH_WEATHER_WEEK, fetchWeatherWorker)
}