import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherDayAC, fetchWeatherWeekAC } from '../../redux/actionCreators';
import CityCard from '../CityCard/CityCard';

export default function CitiesList() {
  const dispatch = useDispatch()
  const { cities } = useSelector(store => store)

  return (
    <div>
      {cities.map(el => <div style={{border:"1px solid black", borderRadius:"25%", padding:"1em",margin:"1em"}}> <CityCard key={performance.now()} city={el}/></div>)}
    </div>
  )
}
