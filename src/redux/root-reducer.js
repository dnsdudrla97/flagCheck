import { combineReducers } from 'redux';
import alert from './alert/alert.reducer';
import flag from './flag/flag.reducer';

export default combineReducers({
    alert,
    flag,
});
