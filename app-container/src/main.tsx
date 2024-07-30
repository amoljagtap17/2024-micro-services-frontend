import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import AppProvider from './app/providers/AppProvider/index.tsx';
import { Navbar } from './components/sections';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Navbar />
      <App />
    </AppProvider>
  </React.StrictMode>,
);
