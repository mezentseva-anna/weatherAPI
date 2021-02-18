import {ADD_WEATHER_DAY} from '../actionTypes';

export default function (store={}, action) {
    switch (action.type) {
        case ADD_WEATHER_DAY:
            return action.payload
        default:
            return store;
    }
};