import { useState } from 'react';
import { useSelector } from 'react-redux';

export const useUi = () => {
    const { loading } = useSelector((state: any) => state.ui);

    return {
        loading,
    };
};
