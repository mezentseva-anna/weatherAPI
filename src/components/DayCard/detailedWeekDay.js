import React from 'react';
import {tempConventer, timeConventer} from '../../utils/locals';

export const DetailedWeekDay = ({detailedWeekDay}) => {
    const {dt, main, weather, wind} = detailedWeekDay;

    return (
        <div>
            <div>
                {timeConventer(dt).toLocaleDateString()} <br/>
                {timeConventer(dt).getUTCHours()} : 00
            </div>
            <ul>
                <li> Max temp: {tempConventer(main.temp_max)} &#8451;</li>
                <li> Min temp: {tempConventer(main.temp_min)} &#8451;</li>
                <li> Humidity: {main.humidity} %</li>
                <li> Wind: {wind.speed} m/sec</li>
            </ul>
        </div>
    )
}