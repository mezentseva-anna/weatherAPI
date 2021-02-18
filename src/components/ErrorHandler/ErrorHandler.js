import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {errDayAC} from '../../redux/actionCreators';

export const ErrorHandler = () => {
    const {err} = useSelector(store => store);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const backToMainPage = setTimeout(() => {
            dispatch(errDayAC({status: false}))
            history.push('/')
        }, 3000)
        return () => clearTimeout(backToMainPage)
    },[dispatch,history])
    return (
        <div> 
            OPS something went wrong ...
            <h1>{err.message}</h1>
            In 5 sec you will be redirected back to main
        </div>
    )
};