import React from 'react';
import {ShortCard} from '../ShortCard/ShortCard';

export const DayBlock = ({day, date}) => {
    return (<div>
        {date && date}
        <div>
            {day && day.map(hour =>
                <ShortCard key={hour.dt_txt} hours={hour}/>
            )}
        </div>
    </div>)
};