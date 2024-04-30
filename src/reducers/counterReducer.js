import { createReducer } from "@reduxjs/toolkit"
import { decrement, increment } from "../actions/counterAction"

const initialState = {
    counter: 0,
}
const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => {
            state.counter++
        })
        .addCase(decrement, (state) => {
            state.counter--
        })
})


export default counterReducer