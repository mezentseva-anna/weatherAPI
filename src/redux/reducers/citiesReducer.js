import { ADD_CITIES, DELETE_CITY } from '../actionTypes';

export default function (store = [], action) {
  switch (action.type) {
    case ADD_CITIES:
      return [...store, action.payload];
    case DELETE_CITY:
      console.log(action.payload);
      return store.filter(el => el !== action.payload);
    default:
      return store;
  }
};