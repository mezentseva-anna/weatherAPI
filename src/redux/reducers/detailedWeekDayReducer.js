import {ADD_DETAILED_WEEK_DAY} from '../actionTypes';

export default function (store=null, action) {
    switch (action.type) {
        case ADD_DETAILED_WEEK_DAY:
            return action.payload
        default:
            return store;
    }
};