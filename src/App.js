import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addCitiesAC, fetchWeatherDayAC, fetchWeatherWeekAC } from './redux/actionCreators';
import { DayCard } from './components/DayCard/DayCard';
import { WeekList } from './components/WeekList/WeekList';
import CitiesList from './components/CitiesList/CitiesList';
import style from './App.module.scss';


export function App() {
    const dispatch = useDispatch();
    const { err } = useSelector(store => store);
    const { cities } = useSelector(store => store)
    const history = useHistory();
    let [city, setCity] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            dispatch(fetchWeatherDayAC({ latitude, longitude }))
            dispatch(fetchWeatherWeekAC({ latitude, longitude }))
        })
        if (err.status) {
            history.push('/error')
        }
    }, [dispatch, err, history])

    const findCity = (e) => {
        e.preventDefault();
        if (city) {
            city = city[0].toUpperCase() + city.slice(1);
            dispatch(fetchWeatherDayAC(city))
            dispatch(fetchWeatherWeekAC(city))
            if (cities.indexOf(city) === -1) dispatch(addCitiesAC(city))
            setCity('')
        }
    };

    return (
        <>
            <div className={style.weatherContainer}>
                <div>
                    <div className={style.navPannel}>
                        <form onSubmit={findCity}>
                            <input value={city} onChange={({ target }) => setCity(target.value)} placeholder="Search city" />
                            <button type="submit">Find</button>
                        </form>
                        <DayCard />
                        {cities.length !== 0 ? <CitiesList /> : null}
                    </div>
                </div>
                <WeekList />
            </div>
        </>
    );
}