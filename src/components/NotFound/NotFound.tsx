import { Box, Typography } from '@mui/material';
import React from 'react';

export default function NotFound() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
            <Typography variant='h1' >
                404
            </Typography>
            <Typography variant='h6' >
               El usuario no se pudo encontrar
            </Typography>
        </Box>
    );
}
