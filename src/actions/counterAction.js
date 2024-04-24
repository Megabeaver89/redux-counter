import { DECREMENT, INCREMENT } from "../types/counterType"

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
        setTimeout(() => {
            dispatch(increment())
        }, 3000)

    }
}