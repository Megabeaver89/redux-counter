import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import darkThemeReducer from './themeReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    darkTheme: darkThemeReducer
});

export default rootReducer;
