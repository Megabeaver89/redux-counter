import { createReducer } from "@reduxjs/toolkit"
import { BTN_DISABLED, BTN_ENABLED } from "../types/btnType"

const initialBtnState = {
    value: false
}

const btnReducer = createReducer(initialBtnState, (builder) => {
    builder
        .addCase(BTN_DISABLED, (state) => {
            state.value = true
        })
        .addCase(BTN_ENABLED, (state) => {
            state.value = false
        })
})

export default btnReducer