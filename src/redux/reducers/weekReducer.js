import {ADD_WEATHER_WEEK} from '../actionTypes';
import {timeConventer} from '../../utils/locals';

export default function (store = [], action) {
    switch (action.type) {
        case ADD_WEATHER_WEEK:
            const {list} = action.payload;
            return list.reduce((acc, el) => {
                let key = `${timeConventer(el.dt).toDateString()}`;
                if(key !== new Date().toDateString()){
                    acc[key] = acc[key] ? [...acc[key], el] : []
                }
                    return acc
            }, {})
        default:
            return store;
    }
};