import { createAction } from "@reduxjs/toolkit"
import { DECREMENT, INCREMENT } from "../types/counterType"
import { disableBtn, enableBtn } from "./btnAction"

export const increment = createAction(INCREMENT)

export const decrement = createAction(DECREMENT)

export const asyncIncrement = () => {
    return function (dispatch) {
        dispatch(disableBtn())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enableBtn())
        }, 3000)
    }
}