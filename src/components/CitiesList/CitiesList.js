import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherDayAC, fetchWeatherWeekAC } from '../../redux/actionCreators';

export default function CitiesList() {
  const dispatch = useDispatch()
  const { cities } = useSelector(store => store)

  const clickHandler = (city) => {
    dispatch(fetchWeatherDayAC(city))
    dispatch(fetchWeatherWeekAC(city))
  }

  return (
    <div>
      {cities.map(el => <span key={Math.random()} onClick={el => clickHandler(el.target.innerHTML)} >{el}</span>)}
    </div>
  )
}
