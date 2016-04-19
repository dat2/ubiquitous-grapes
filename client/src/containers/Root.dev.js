import React from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';

import App from '../components/App';

export default function Root({ store, history }) {
    return (
        <Provider store={store}>
            <div>
                <App />
                <DevTools />
            </div>
        </Provider>
    );
}
