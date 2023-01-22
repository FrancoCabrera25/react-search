import { Box, CircularProgress } from '@mui/material';
export default function Loader() {
    return (
        <Box
            sx={{
                marginTop: '35px',
                display: 'flex',
                justifyContent: 'center',
            }}>
            <CircularProgress color='secondary' />
        </Box>
    );
}
