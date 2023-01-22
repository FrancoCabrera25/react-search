import { useState } from 'react';
import { useSelector } from 'react-redux';

export const useUi = () => {
    const { loading } = useSelector((state: any) => state.ui);
    // const [loading, setLoading] = useState(false);

    // const changeLoading = (value: boolean) => {
    //     setLoading(value);
    // };

    return {
        loading,
    };
};
