import React, {useEffect, useState} from 'react';
import {tempConventer, timeConventer, weatherImg} from '../../utils/locals';
import {useDispatch} from 'react-redux';
import {addDetailedWeekDayAC} from '../../redux/actionCreators';

export const ShortCard = ({hours}) => {
    const {main, weather, dt} = hours
    const [briefInfo, setBrief] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (weather) {
            const [briefInfo] = weather;
            setBrief(briefInfo)
        }
    }, [weather])

    return (
        <div title="Click for more information"
             onClick={() => dispatch(addDetailedWeekDayAC(hours))}>
            <div>
                {timeConventer(dt).getUTCHours() === 0 ? 'Midnight' : timeConventer(dt).getUTCHours() + ' hours'}
            </div>
            {main && briefInfo ? <div>
                <img src={weatherImg(briefInfo.main.toLocaleLowerCase())} alt="img"/>
                <ul>
                    <li>{briefInfo.main}</li>
                    <li>{tempConventer(main.temp)}  &#8451;</li>
                </ul>
            </div> : null}
        </div>
    )
};