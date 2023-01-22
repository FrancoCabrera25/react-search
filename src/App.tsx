import { Box, Card, CircularProgress, Container } from '@mui/material';
import { Search } from './components/Search/Search.js';
import { AppTheme } from './theme/AppTheme.js';
import { UserCard } from './components/UserCard/UserCard.js';
import { useUser } from './hooks/user/useUser.js';
import { useUi } from './hooks/ui/useUi.js';
import UserGitHub from './components/User/UserGitHub.js';
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
                {loading ? (
                    <Box
                        sx={{
                            marginTop: '35px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <CircularProgress color='secondary' />
                    </Box>
                ) : (
                    <UserGitHub />
                )}
            </Card>
        </AppTheme>
    );
}

export default App;
