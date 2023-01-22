import { Avatar, Box, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useUser } from '../../hooks/user/useUser';
import NotFound from '../NotFound/NotFound';
import { UserDescription } from './UserDescription';
import UserAccountInformation from './UserAccountInformation';
import { UserPersonalInformation } from './UserPersonalInformation';

const UserGitHub = () => {
    const { user, userIsNotFound } = useUser();

    if (userIsNotFound) {
        return <NotFound />;
    }

    if (!user.name) {
        return <p>Buscar un usuario de github</p>;
    }

    return (
        <Grid container spacing={4} sx={{ marginTop: '5px' }}>
        <Grid item xs={3}>
            <CardMedia
                component='img'
                image={user.avatar_url}
                alt='Git'
                sx={{ borderRadius: '50%', marginLeft: 1 }}
            />
        </Grid>
        <Grid item xs={9}>
            <Stack direction='column' spacing={2} sx={{ margin: '2px' }}>
                <UserPersonalInformation user={user} />
                <UserDescription user={user} />
                <UserAccountInformation user={user}/>
            </Stack>
        </Grid>
    </Grid>
    );
};

export default UserGitHub;
