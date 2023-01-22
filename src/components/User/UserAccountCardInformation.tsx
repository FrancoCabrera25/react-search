import { Card, Stack, Typography } from '@mui/material';

interface Props {
    title: string;
    description: string | number; 
}
export const UserAccountCardInformation = ({ title, description }: Props) => {
    return (
        <Card sx={{ padding: '20px', borderRadius: '10px' }}>
            <Stack
                direction='row'
                spacing={1}
                sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Typography
                    variant='h6'
                    sx={{
                        fontSize: { xs: '15px', md: '25px' },
                    }}>
                    {title}
                </Typography>
                <Typography variant='h6'>{description}</Typography>
            </Stack>
        </Card>
    );
};
