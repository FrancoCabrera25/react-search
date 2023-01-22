import { Stack, Typography } from '@mui/material';
import React from 'react';

interface Props {
    description: string;
    icon: JSX.Element;
    direction?: 'row' | 'column';
    spacing?: number;
    isLink?: boolean;
}

export const UserLocationItemInformation = ({
    icon,
    isLink,
    description,
    direction = 'row',
    spacing = 1,
}: Props) => {
    return (
        <Stack direction={direction} spacing={spacing}>
            {icon}
            {/* <LanguageOutlined /> */}
            {isLink ? (
                <a target='_blank' href={description} rel='noopener noreferrer'>
                    <Typography
                        variant='subtitle2'
                        sx={{ wordBreak: 'break-all', maxWidth: '250px' }}>
                        {description
                            ? description
                            : 'Información no disponible'}
                    </Typography>
                </a>
            ) : (
                <Typography
                    variant='subtitle2'
                    sx={{ wordBreak: 'break-all', maxWidth: '250px' }}>
                    {description ? description : 'Información no disponible'}
                </Typography>
            )}
        </Stack>
    );
};
