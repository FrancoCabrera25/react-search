import { SearchOutlined } from '@mui/icons-material';
import { IconButton, Stack, TextField } from '@mui/material';
import { useState } from 'react';

interface Props {
    onSearchEvent: (value: string) => void;
}

export const Search = ({ onSearchEvent }: Props) => {
    const [inputValue, setInputValue] = useState<string>('');

    const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    
    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            onSearchEvent(inputValue);
        }
    };

    return (
        <Stack direction='row' sx={{ marginTop: 5, width: '100%' }}>
            <TextField
                onChange={onChangeInputValue}
                onKeyDown={onKeyDown}
                value={inputValue}
                sx={{ width: '100%' }}
                size='small'
                variant='outlined'
                placeholder='Buscar usuario..'
                label='Buscar usuario'></TextField>
            <IconButton
                onClick={() => onSearchEvent(inputValue)}
                size='small'
                sx={{ left: '-50px', display: 'flex', alignItems: 'center' }}>
                <SearchOutlined />
            </IconButton>
        </Stack>
    );
};
