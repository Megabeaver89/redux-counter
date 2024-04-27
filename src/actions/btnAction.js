import { BTN_DISABLED, BTN_ENABLED } from "../types/btnType"

export const disableBtn = () => {
    return {
        type: BTN_DISABLED
    }
}

export const enableBtn = () => {
    return {
        type: BTN_ENABLED
    }
} 