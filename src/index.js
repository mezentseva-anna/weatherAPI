import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './Routers';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Router/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
