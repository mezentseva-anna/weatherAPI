import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherDayAC, fetchWeatherWeekAC } from '../../redux/actionCreators';
import CityCard from '../CityCard/CityCard';

export default function CitiesList() {
  const dispatch = useDispatch()
  const { cities } = useSelector(store => store)

  return (
    <div>
      {cities.map(el => <CityCard key={Math.random()} city={el}/>)}
    </div>
  )
}
