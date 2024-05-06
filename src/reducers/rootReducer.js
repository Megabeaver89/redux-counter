import { combineReducers } from 'redux';
import counterSlice from '../slices/counterSlice';
import themeSlice from '../slices/themeSlice';
import btnSlice from '../slices/btnSlice';

const rootReducer = combineReducers({
    counter: counterSlice,
    theme: themeSlice,
    isDisabledBtn: btnSlice
});

export default rootReducer;
