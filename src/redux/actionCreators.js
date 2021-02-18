import {
  ADD_WEATHER_DAY,
  FETCH_WEATHER_DAY,
  FETCH_WEATHER_WEEK,
  ADD_WEATHER_WEEK,
  ADD_DETAILED_WEEK_DAY,
  ADD_CITIES
} from './actionTypes';

export const addWeatherDayAC = (payload) => ({
  type: ADD_WEATHER_DAY,
  payload
});

export const fetchWeatherDayAC = (payload) => ({
  type: FETCH_WEATHER_DAY,
  payload
});

export const addWeatherWeekAC = (payload) => ({
  type: ADD_WEATHER_WEEK,
  payload
});

export const fetchWeatherWeekAC = (payload) => ({
  type: FETCH_WEATHER_WEEK,
  payload
});

export const addDetailedWeekDayAC = (payload) => ({
  type: ADD_DETAILED_WEEK_DAY,
  payload
})

export const addCitiesAC = (payload) => ({
  type: ADD_CITIES,
  payload
})


export const errDayAC = (payload) => ({
  type: 'ERR_IN_APP',
  payload
})