import {
    BusinessOutlined,
    LanguageOutlined,
    LocationOnOutlined,
} from '@mui/icons-material';
import { Grid, Stack, Typography } from '@mui/material';
import { IUser } from '../../interface/User';
import TwitterIcon from '@mui/icons-material/Twitter';
import { UserLocationInformation } from './UserLocationInformation';

interface Props {
    user: IUser;
}

export const UserPersonalInformation = ({ user }: Props) => {
    const { name, login, created_at } = user;
    return (
        <>
            <Stack
                direction='row'
                sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                    sx={{
                        typography: { sm: 'h4', xs: 'h6' },
                        marginBottom: '0px',
                    }}>
                    {name}
                </Typography>
                <Typography variant='subtitle2'>{created_at}</Typography>
            </Stack>
            <Grid container>
                <Grid item xs={12} sx={{ marginBottom: '10px' }}>
                    <Typography
                        variant='caption'
                        sx={{ marginTop: '0px' }}>{`@${login}`}</Typography>
                </Grid>
                <UserLocationInformation
                    blog={user.blog}
                    location={user.location}
                    company={user.company}
                    twitter_username={user.twitter_username}
                />
            </Grid>
        </>
    );
};
