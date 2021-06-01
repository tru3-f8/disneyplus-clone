import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: false
}

const headerSlice = createSlice({
    name:'header',
    initialState,
    reducers: {
        setIsLogin: (state, action) => {
            state.login = action.payload.login;
        }
    }
})

export const { setIsLogin } = headerSlice.actions;

export const selectHeader = (state) => state.header.login;

export default headerSlice.reducer;