import React, {useEffect, useState} from 'react';
import {tempConventer, timeConventer, weatherImg} from '../../utils/locals';
import {useSelector} from 'react-redux';
import {DetailedWeekDay} from './detailedWeekDay';
import style from './DayCard.module.scss'

export const DayCard = () => {
    const {main, sys, name, weather, wind} = useSelector(store => store.day);
    const {detailedWeekDay} = useSelector(store => store);
    const [briefInfo, setBrief] = useState(null);

    useEffect(() => {
        if (weather) {
            const [briefInfo] = weather;
            setBrief(briefInfo)
        }
    }, [weather])


    return (
        <div className={style.card}>
            <div className={style.name}>
                Your region : <br/>
                {name ? <strong>{name}</strong> : null}
            </div>
            {main && briefInfo ? <div className={style.cardDetails}>
                <div className={style.picContainer}>
                    <img src={weatherImg(briefInfo.main.toLocaleLowerCase())} alt="img"/>
                    <p>
                        Today it is {briefInfo.main}
                        <br/>
                        {briefInfo.description}
                    </p>
                </div>
                <ul className={style.infoContainer}>
                    <li>Sunrise: {timeConventer(sys.sunrise).getHours()} : {timeConventer(sys.sunrise).getMinutes()}</li>
                    <li>Sunset: {timeConventer(sys.sunset).getHours()} : {timeConventer(sys.sunset).getMinutes()}</li>
                    <li>Current temp: {tempConventer(main.temp)} &#8451;</li>
                    <li> Max temp: {tempConventer(main.temp_max)} &#8451;</li>
                    <li> Min temp: {tempConventer(main.temp_min)} &#8451;</li>
                    <li> Humidity: {main.humidity} %</li>
                    <li> Wind: {wind.speed} m/sec</li>
                </ul>
            </div> : null}
            <div className={style.weekDayContainer}>
                {detailedWeekDay ? <DetailedWeekDay detailedWeekDay={detailedWeekDay}/>: 'You can see more info here, just click on any day'}
            </div>

        </div>
    )
};