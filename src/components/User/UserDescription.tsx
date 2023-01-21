import { Stack, Typography } from "@mui/material";
import { IUser } from "../../interface/User";

interface Props {
    user: IUser;
}

export const UserDescription = ({ user }: Props) => {
    const { bio } = user;
  return (
    <>
    <Stack>
    <Typography>{ bio  ? bio : 'not descripcion'}</Typography>
    </Stack>
    {/* <PaperInformation />
    <LocationInformation /> */}
    </>
  )
}
