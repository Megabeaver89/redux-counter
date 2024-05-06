import { createSlice } from "@reduxjs/toolkit";

export const btnSlice = createSlice({
    name: 'btn',
    initialState: {
        value: false,
    },
    reducers: {
        disableBtn: (state) => {
            state.value = true
        },
        enableBtn: (state) => {
            state.value = false
        }
    }
})

export const { disableBtn, enableBtn } = btnSlice.actions
export default btnSlice.reducer