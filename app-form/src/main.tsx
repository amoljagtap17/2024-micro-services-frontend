// @ts-ignore
import AppProvider from '@app-container/AppProvider';
// @ts-ignore
import { Navbar } from '@app-container/Navbar';
import { Container, Grid } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <App />
          </Grid>
        </Grid>
      </Container>
    </AppProvider>
  </React.StrictMode>,
);
