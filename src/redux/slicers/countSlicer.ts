import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface CounterState {
    count : number
}

const initial : CounterState = {
    count : 0,
}

export const countSlice = createSlice({
    name : 'counter',
    initialState : initial,
    reducers : {
        increaseby1 : (state) => {
            state.count += 1;
        },

        decreaseby1 : (state) => {
            if(state.count > 0) {
                state.count -= 1;
            }
        },

        incresebyAmount : (state,action) => {
            state.count += action.payload;
        },

    }
});


export const { increaseby1, decreaseby1, incresebyAmount } = countSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state : RootState) => state.counter

export default countSlice.reducer