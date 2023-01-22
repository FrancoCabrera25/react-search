import { Grid, Stack, Typography } from '@mui/material';
import {
    LocationOnOutlined,
    LanguageOutlined,
    BusinessOutlined,
} from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { UserLocationItemInformation } from './UserLocationItemInformation';

interface Props {
    blog: string;
    location: string;
    twitter_username: string;
    company: string;
}
export const UserLocationInformation = ({
    blog,
    location,
    twitter_username,
    company,
}: Props) => {
    return (
        <>
            <Grid item xs={6}>
                <UserLocationItemInformation
                    description={blog}
                    isLink
                    icon={<LanguageOutlined />}
                />
            </Grid>
            <Grid item xs={6}>
                <UserLocationItemInformation
                    description={location}
                    icon={<LocationOnOutlined />}
                />
            </Grid>
            <Grid item xs={6}>
                <UserLocationItemInformation
                    description={twitter_username}
                    icon={<TwitterIcon />}
                />
            </Grid>
            <Grid item xs={6}>
                <UserLocationItemInformation
                    description={company}
                    icon={<BusinessOutlined />}
                />
            </Grid>
        </>
    );
};
