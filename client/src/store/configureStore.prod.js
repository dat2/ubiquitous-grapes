import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../rootReducer';

export default function configureStore(initialState = undefined) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, promiseMiddleware),
    );
}