import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {fetchWeatherDayAC, fetchWeatherWeekAC} from './redux/actionCreators';

export function App() {
    const dispatch = useDispatch();
    const {err} = useSelector(store => store);
    const history = useHistory();
    const [city, setCity] = useState('');

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
        dispatch(fetchWeatherDayAC(city))
        dispatch(fetchWeatherWeekAC(city))
        setCity('')
    };

    return (
        <div>
            <div>
                <form onSubmit={findCity}>
                    <input value={city} onChange={({target}) => setCity(target.value)} placeholder="Search city"/>
                    <button type="submit">Find</button>
                </form>
            </div>
        </div>
    );
}