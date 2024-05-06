import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { disableBtn, enableBtn } from "./btnSlice";


export const asyncIncrementState = createAsyncThunk(
    'counter/asyncIncrementState',
    async (_, { dispatch }) => {
        dispatch(disableBtn());
        await new Promise(resolve => setTimeout(resolve, 3000));
        dispatch(increment());
        dispatch(enableBtn());
    }
);

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => {
            state.counter++
        },
        decrement: (state) => {
            state.counter--
        },
    },
    extraReducers: (builder) => {
        builder.addCase(asyncIncrementState.pending, (state) => {
        });
        builder.addCase(asyncIncrementState.fulfilled, (state) => {
        });
        builder.addCase(asyncIncrementState.rejected, (state) => {
        });
    },
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer