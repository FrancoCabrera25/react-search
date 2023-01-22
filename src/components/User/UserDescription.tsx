import { Stack, Typography } from '@mui/material';
import { IUser } from '../../interface/User';
import { UserLocationInformation } from './UserLocationInformation';
import UserAccountInformation from './UserAccountInformation';

interface Props {
    user: IUser;
}

export const UserDescription = ({ user }: Props) => {
    const { bio } = user;
    return (
        <Stack sx={{ justifyContent: 'center' }}>
            <Typography variant='body1'>
                {bio ? bio : 'not descripcion'}
            </Typography>
        </Stack>
    );
};
