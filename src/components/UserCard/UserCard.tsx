import { CardMedia, Grid, Stack } from '@mui/material';
import { IUser } from '../../interface/User';
import { UserDescription } from '../User/UserDescription';
import { UserInformation } from '../User/UserPersonalInformation';

interface Props {
    user: IUser ;
}

export const UserCard = ({ user }: Props) => {
    return (
        <Grid container spacing={2} sx={{ marginTop: '5px' }}>
            <Grid item xs={3}>
                <CardMedia
                    component='img'
                    image={user.avatar_url}
                    alt='Git'
                    sx={{ borderRadius: '50%', marginLeft: 1 }}
                />
            </Grid>
            <Grid item xs={12} md={9}>
                <Stack direction='column' spacing={2} sx={{ margin: '20px' }}>
                    <UserInformation user={user} />
                    <UserDescription user={user} />
                </Stack>
            </Grid>
        </Grid>
    );
};
