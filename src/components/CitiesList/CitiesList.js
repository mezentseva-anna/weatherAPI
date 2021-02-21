import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CityCard from '../CityCard/CityCard';
import style from './CitiesList.module.scss';


export default function CitiesList() {
  const { cities } = useSelector(store => store)

  return (
    <div className={style.cityList}>
      {cities.map(el => <div className={style.cityCard}>
        <CityCard key={performance.now()} city={el} />
      </div>)}
    </div>
  )
}
