import CounterRedcuer from './Counter';
import LoggedReducer from './isLoged';
import {combineReducers} from 'redux';

const rootReducers =  combineReducers({
    counter: CounterRedcuer,
    IsLog: LoggedReducer
});


export default rootReducers;