import {PrimeReactProvider} from 'primereact/api';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {ThemeProvider} from './components/ThemeProvider';

// Import both themes - ThemeProvider will manage which one is active
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './styles.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <PrimeReactProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </ThemeProvider>
      </PrimeReactProvider>
    </HelmetProvider>
  </React.StrictMode>
);
