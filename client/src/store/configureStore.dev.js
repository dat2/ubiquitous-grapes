import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import DevTools from '../containers/DevTools';
import rootReducer from '../rootReducer';

export default function configureStore(initialState = undefined) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            //middleware
            applyMiddleware(thunkMiddleware),
            DevTools.instrument()
        )
    );

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('../rootReducer', () => {
            const nextRootReducer = require('../rootReducer').default
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
