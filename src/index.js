import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '@/redux';
const store = configureStore();

import '@/styles/_index.scss';
import App from '@/pages/App';

// Mobile Safari browser's height issue patch
// https://dev.to/maciejtrzcinski/100vh-problem-with-ios-safari-3ge9
import '@/utils/init/mobileResize';
import '@/utils/init/mobilePinch';

ReactDOM.render(
    <BrowserRouter
        basename={
            process.env.MODE === 'github'
                ? `/${process.env.REPO_NAME}`
                : ''
            }
        >
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
