import { Stack, Typography } from '@mui/material';
import { IUser } from '../../interface/User';

interface Props {
    user: IUser;
}

export const UserInformation = ({ user }: Props) => {
    const { name, login, created_at } = user;
    return (
        <>
            <Stack>
                <Typography>{name}</Typography>
                <Typography>{created_at}</Typography>
            </Stack>
            <Typography>{login}</Typography>
        </>
    );
};
