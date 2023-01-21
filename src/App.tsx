import { Container } from '@mui/material';
import { Search } from './components/Search/Search.js';
import { AppTheme } from './theme/AppTheme.js';
import { useEffect, useState } from 'react';
import { getGitHubUser } from './api/user.js';
import { UserCard } from './components/UserCard/UserCard.js';
import { IUser } from './interface/User';
function App() {
    const [userSearch, setUserSearch] = useState('octocat');
    const [user, setUser] = useState<IUser>({} as IUser);

    const getUser = async () => {
        try {
            const userData = await getGitHubUser(userSearch);
            console.log('data', userData);
            setUser(userData);
        } catch (error) {
            console.log('error', error);
        }
    };
    useEffect(() => {
        getUser();
    }, [userSearch]);

    return (
        <AppTheme>
            <Container
                sx={{
                    background: 'whiteSmoke',
                    height: '500px',
                    width: { xs: '100%', md: '80vw' },
                    borderRadius: '16px',
                    marginTop: { xs: '10px', md: '30px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Search
                    onSearchEvent={(value: string) => setUserSearch(value)}
                />
                <div>{userSearch}</div>
                <UserCard user={user}/>
            </Container>
        </AppTheme>
    );
}

export default App;
