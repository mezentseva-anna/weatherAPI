import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { App } from './App';
import { ErrorHandler } from './components/ErrorHandler/ErrorHandler';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <App/>
            </Route>
            <Route path="/error">
                <ErrorHandler/>
            </Route>
        </Switch>
    )
};