import { Card, Grid, Paper, Stack, Typography } from '@mui/material';
import { IUser } from '../../interface/User';
import { UserAccountCardInformation } from './UserAccountCardInformation';

interface Props {
    user: IUser;
}
export default function UserAccountInformation({ user }: Props) {
    const { public_repos, followers, following } = user;
    return (
        <Grid container spacing={1}>
            <Grid item xs={6} md={4}>
                <UserAccountCardInformation
                    title='Repositorios'
                    description={public_repos}
                />
            </Grid>
            <Grid item xs={6} md={4}>
                <UserAccountCardInformation
                    title='Seguidores'
                    description={followers}
                />
            </Grid>
            <Grid item xs={6} md={4}>
                <UserAccountCardInformation
                    title='Siguiendo'
                    description={following}
                />
            </Grid>
        </Grid>
    );
}
