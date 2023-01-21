import { CardMedia, Grid } from '@mui/material';
import { IUser } from '../../interface/User';
import { UserDescription } from '../User/UserDescription';
import { UserInformation } from '../User/UserInformation';

interface Props {
    user: IUser;
}

export const UserCard = ({ user }: Props) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CardMedia component='img' image={user.avatar_url} alt='Git' />
            </Grid>
            <Grid item xs={8}>
                <UserInformation user={user} />
                <UserDescription  user={user}/>
            </Grid>
        </Grid>
    );
};
