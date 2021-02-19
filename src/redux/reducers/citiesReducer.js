import { ADD_CITIES, DELETE_CITY } from '../actionTypes';

export default function (store = [], action) {
  switch (action.type) {
    case ADD_CITIES:
      window.localStorage.setItem('cities', JSON.stringify([...store, action.payload]));
      return [...store, action.payload];

    case DELETE_CITY:
      window.localStorage.setItem('cities', JSON.stringify([...store.filter(el => el !== action.payload)]));
      return store.filter(el => el !== action.payload);

    default:
      return store;
  }
};