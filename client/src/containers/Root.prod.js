import React from 'react';
import { Provider } from 'react-redux';

import App from '../components/App';

export default function Root({ store, history }) {
    return (
        <Provider store={store}>
            <div>
                <App/>
            </div>
        </Provider>
    );
}
