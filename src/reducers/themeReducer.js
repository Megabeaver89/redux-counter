import { THEME_LIGHT } from "../constants/themeColor";
import { TOGGLE_THEME } from "../types/themeType";

const initialThemeState = {
    value: THEME_LIGHT
};

const themeReducer = (state = initialThemeState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
};

export default themeReducer;
