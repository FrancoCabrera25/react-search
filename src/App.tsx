import { Box, Card } from '@mui/material';
import { Search } from './components/Search/Search.js';
import { AppTheme } from './theme/AppTheme.js';
import { useUser } from './hooks/user/useUser.js';
import { useUi } from './hooks/ui/useUi.js';
import UserGitHub from './components/User/UserGitHub.js';
import Loader from './components/loader/Loader.js';
function App() {
    const { loading } = useUi();
    const { getUser } = useUser();

    return (
        <AppTheme>
            <Card
                sx={{
                    background: 'whiteSmoke',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: { xs: '10px', md: '30px' },
                    padding: '25px',
                }}>
                <Search onSearchEvent={(value: string) => getUser(value)} />
                {loading ? <Loader /> : <UserGitHub />}
            </Card>
        </AppTheme>
    );
}

export default App;
