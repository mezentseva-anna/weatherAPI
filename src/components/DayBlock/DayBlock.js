import React from 'react';
import {ShortCard} from '../ShortCard/ShortCard';
import style from './DayBlock.module.scss';

export const DayBlock = ({day, date}) => {
    return (<div className={style.dayContainer}>
        {date && date}
        <div className={style.hoursContainer}>
            {day && day.map(hour =>
                <ShortCard key={hour.dt_txt} hours={hour}/>
            )}
        </div>
    </div>)
};