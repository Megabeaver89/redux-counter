import { createAction } from "@reduxjs/toolkit"
import { TOGGLE_THEME } from "../types/themeType"

export const toggleTheme = createAction(TOGGLE_THEME, (newTheme) => {
    return {
        payload: newTheme
    }
})
