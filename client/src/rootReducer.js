import { combineReducers } from 'redux';
import * as reducers from './ducks/index';

const rootReducer = combineReducers(reducers.default);
export default rootReducer;
