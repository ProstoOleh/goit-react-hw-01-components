import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/index.js';
import App from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
