import { DECREMENT, INCREMENT } from "../types/counterType"
import { disableBtn, enableBtn } from "./btnAction"

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const asyncIncrement = () => {
    return function (dispatch) {
        dispatch(disableBtn())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enableBtn())
        }, 3000)
    }
}