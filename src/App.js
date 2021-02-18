import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {addCitiesAC, fetchWeatherDayAC, fetchWeatherWeekAC} from './redux/actionCreators';
import {DayCard} from './components/DayCard/DayCard';
import {WeekList} from './components/WeekList/WeekList';
import CitiesList from './components/CitiesList/CitiesList';

export function App() {
    const dispatch = useDispatch();
    const {err} = useSelector(store => store);
    const history = useHistory();
    let [city, setCity] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            const {latitude, longitude} = coords;
            dispatch(fetchWeatherDayAC({latitude, longitude}))
            dispatch(fetchWeatherWeekAC({latitude, longitude}))
        })
        if (err.status) {
            history.push('/error')
        }
    }, [dispatch, err, history])

    const findCity = (e) => {
        e.preventDefault();
        city = city[0].toUpperCase() + city.slice(1);
        console.log(city);
        dispatch(fetchWeatherDayAC(city))
        dispatch(fetchWeatherWeekAC(city))
        dispatch(addCitiesAC(city))
        setCity('')
    };

    return (
        <div>
            <CitiesList />
            <div>
                <form onSubmit={findCity}>
                    <input value={city} onChange={({target}) => setCity(target.value)} placeholder="Search city"/>
                    <button type="submit">Find</button>
                </form>
                <DayCard/>
            </div>
            <WeekList/>
        </div>
    );
}