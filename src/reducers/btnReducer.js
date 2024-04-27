import { BTN_DISABLED, BTN_ENABLED } from "../types/btnType"

const initialBtnState = {
    value: false
}

const btnReducer = (state = initialBtnState, action) => {
    switch (action.type) {
        case BTN_DISABLED:
            return {
                ...state,
                value: true,
            }
        case BTN_ENABLED:
            return {
                ...state,
                value: false
            }
        default:
            return state;
    }
}

export default btnReducer