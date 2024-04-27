import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import themeReducer from './themeReducer';
import btnReducer from './btnReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    isDisabledBtn: btnReducer
});

export default rootReducer;
