import { Container } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import UIProvider from './context/ui/UIProvider';
import './index.css';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <UIProvider>
            <Provider store={store}>
                <Container>
                    <App />
                </Container>
            </Provider>
        </UIProvider>
    </React.StrictMode>
);
