import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas/rootSaga';
import cities from './reducers/citiesReducer';
import day from './reducers/dayReducer';
import week from './reducers/weekReducer';
import err from './reducers/errReducer';
import detailedWeekDay from './reducers/detailedWeekDayReducer';

const sagaMiddleware = createSagaMiddleware()

const city = JSON.parse(window.localStorage.getItem('cities'));
const preloadedState = {
    cities: city ? city : [],
}

const store = createStore(combineReducers({cities, day, week, err, detailedWeekDay}), preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
