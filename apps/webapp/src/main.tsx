import { HTTPClient } from '@nx-todo-frontend/api';
import { I18NProvider } from '@nx-todo-frontend/i18n';
import { APIProvider } from '@nx-todo-frontend/query';
import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import dayjs from 'dayjs';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './common/App';

import './styles.css';

import 'dayjs/locale/es';
import 'dayjs/locale/fr';

dayjs.extend(localizedFormat);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_VERSION_PATH = import.meta.env.VITE_API_VERSION_PATH;
const I18N_URL = import.meta.env.VITE_I18N_URL;

const httpClient = new HTTPClient(BACKEND_URL, API_VERSION_PATH);

root.render(
  <StrictMode>
    <BrowserRouter>
      <I18NProvider locale="es" urlApp={I18N_URL} folderPath="/translations/">
        <APIProvider httpClient={httpClient}>
          <ThemeProvider theme={themes.light} enabledResetTheme>
            <App />
          </ThemeProvider>
        </APIProvider>
      </I18NProvider>
    </BrowserRouter>
  </StrictMode>,
);
