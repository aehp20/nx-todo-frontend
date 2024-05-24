import { HTTPClient } from '@nx-todo-frontend/api';
import { I18NProvider } from '@nx-todo-frontend/i18n';
import { APIProvider } from '@nx-todo-frontend/query';
import { ThemeProvider } from '@nx-todo-frontend/theme';

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

const APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
const APP_API_VERSION_PATH = import.meta.env.VITE_APP_API_VERSION_PATH;
const APP_I18N_URL = import.meta.env.VITE_APP_I18N_URL;
const APP_LOCALE = import.meta.env.VITE_APP_LOCALE;
const APP_THEME = import.meta.env.VITE_APP_THEME;

const httpClient = new HTTPClient(APP_BACKEND_URL, APP_API_VERSION_PATH);

root.render(
  <StrictMode>
    <BrowserRouter>
      <I18NProvider
        locale={APP_LOCALE}
        urlApp={APP_I18N_URL}
        folderPath="/translations/"
      >
        <APIProvider httpClient={httpClient}>
          <ThemeProvider theme={APP_THEME} enabledResetTheme>
            <App />
          </ThemeProvider>
        </APIProvider>
      </I18NProvider>
    </BrowserRouter>
  </StrictMode>,
);
