import { createReducer } from "@reduxjs/toolkit";
import { THEME_LIGHT } from "../constants/themeColor";
import { TOGGLE_THEME } from "../types/themeType";

const initialThemeState = {
    value: THEME_LIGHT
};

const themeReducer = createReducer(initialThemeState, (builder) => {
    builder.addCase(TOGGLE_THEME, (state, action) => {
        state.value = action.payload
    })
})

export default themeReducer;
