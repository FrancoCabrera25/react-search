import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getGitHubUser } from '../../api/user';
import { useAppDispatch } from '../../store';
import { setLoading } from '../../store/ui/uiSlice';
import { setError, setUser, setUserNotFound } from '../../store/user/userSlice';
import { RootState } from '../../store/store';

export const useUser = () => {
    const { user, userIsNotFound } = useSelector((state: RootState) => state.user);

    const dispatch = useAppDispatch();
    const [userSearch, setUserSearch] = useState('octocat');

    const getUser = async (value: string) => {
        dispatch(setLoading(true));
        dispatch(startGetUser(value));
    };

    const startGetUser = (user: string) => {
        return async (dispatch: any) => {
            try {
                const result = await getGitHubUser(user);
                dispatch(setUser(result));
                dispatch(setLoading(false));
            } catch (error: any) {
                dispatch(setLoading(false));
                if (error.message === 'Not Found') {
                    dispatch(setUserNotFound());
                } else {
                    dispatch(setError(error.message));
                }
            }
        };
    };

    // useEffect(() => {
    //     setUser({} as IUser);
    //     setLoading(true);
    //     const time = setTimeout(() => {
    //         getUser();
    //     }, 2000);
    // }, [userSearch]);

    return {
        user,
        userIsNotFound,

        getUser,
        setUserSearch,
    };
};
