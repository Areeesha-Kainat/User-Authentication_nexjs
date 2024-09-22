import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState :boolean = false;

export const loadingSlice = createSlice({
    name:"loadingSlice",
    initialState,
    reducers: {
        setloading: (state,action :PayloadAction<boolean>) =>{
            return action.payload;
        },
    },
});

export const { setloading } = loadingSlice.actions;
export default loadingSlice.reducer;