import { CircularProgress } from '@mui/material';
import React from 'react';
import { useUi } from '../../hooks/ui/useUi';

export default function Loader() {
    const { loading } = useUi();
    console.log(loading);
    return <CircularProgress color='secondary' />;
}
