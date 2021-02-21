import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchWeatherDayAC, fetchWeatherWeekAC, deleteCityAC } from '../../redux/actionCreators';
import style from './CityCard.module.scss'

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
    <div className={style.city} onClick={clickHandler}>
      <div>{city}</div>
      <button className={style.button} onClick={deleteCity}>Delete</button>
    </div>
  )
}
