import {ADD_CITIES} from '../actionTypes';

export default function (store=[], action) {
    switch (action.type) {
        case ADD_CITIES:
            return [...store, action.payload];
        default:
            return store;
    }
};