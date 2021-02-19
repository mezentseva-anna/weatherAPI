import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchWeatherDayAC, fetchWeatherWeekAC, deleteCityAC } from '../../redux/actionCreators';

export default function CityCard({ city }) {

  const dispatch = useDispatch()

  const deleteCity = () => {
    dispatch(deleteCityAC(city))
  }

  const clickHandler = () => {
    dispatch(fetchWeatherDayAC(city))
    dispatch(fetchWeatherWeekAC(city))
  }

  return (
    <div onClick={clickHandler}>
      <div>{city}</div>
      <button onClick={deleteCity}>Delete</button>
    </div>
  )
}
