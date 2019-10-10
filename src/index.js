import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import App from 'components/App';
import GlobalStyles from 'styles/globals';
import configStore from 'store';

const renderApp = () => {
    const store = configStore({});

    if (process.env.NODE_ENV !== 'production') {
        console.log('Init state ->');
        console.log(store.getState());
    }

    ReactDOM.render(
        <Provider store={store}>
            <div>
                <GlobalStyles />
                <App />
            </div>
        </Provider>,
        document.getElementById('root')
    );
};

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
