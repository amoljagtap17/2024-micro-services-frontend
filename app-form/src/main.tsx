// @ts-ignore
import AppProvider from '@app-container/AppProvider';
import { Container } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Container maxWidth="xs">
        <App />
      </Container>
    </AppProvider>
  </React.StrictMode>,
);
