import { TOGGLE_THEME } from "../types/themeType"

export const toggleTheme = (newTheme) => {
    return {
        type: TOGGLE_THEME,
        payload: newTheme
    }
}