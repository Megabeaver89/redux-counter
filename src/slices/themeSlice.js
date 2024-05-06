import { createSlice } from "@reduxjs/toolkit";
import { THEME_LIGHT } from "../constants/themeColor";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: THEME_LIGHT
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.value = action.payload
        },
    }
},
)

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer