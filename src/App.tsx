import { Box, Button, Card } from '@mui/material';
import { Search } from './components/Search/Search.js';
import { AppTheme } from './theme/AppTheme.js';
import { useUser } from './hooks/user/useUser.js';
import { useUi } from './hooks/ui/useUi.js';
import UserGitHub from './components/User/UserGitHub.js';
import Loader from './components/loader/Loader.js';
import { useContext } from 'react';
import { UIContext } from './context/ui/UIContext.js';
function App() {
    const { loading } = useUi();
    const { getUser } = useUser();
    const { themeSelected, changeTheme } = useContext(UIContext);

    const themeChange = () => {
        const theme = themeSelected === 'light' ? 'dark' : 'light';
        changeTheme(theme);
    };

    return (
        <Card
            sx={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: { xs: '10px', md: '30px' },
                padding: '25px',
            }}>
            <Button onClick={themeChange}>Cambiar Tema</Button>
            <Search onSearchEvent={(value: string) => getUser(value)} />
            {loading ? <Loader /> : <UserGitHub />}
        </Card>
    );
}

export default App;
