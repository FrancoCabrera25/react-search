import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../interface/User';

interface IuserSlice {
    user: IUser;
    userIsNotFound: boolean;
    error: string;
}

const initialState: IuserSlice = {
    user: {} as IUser,
    userIsNotFound: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
            state.userIsNotFound = false;
            state.error = '';
        },
        setUserNotFound: (state) => {
            state.userIsNotFound = true;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
    },
});

export const { setUser, setUserNotFound, setError } = userSlice.actions;
