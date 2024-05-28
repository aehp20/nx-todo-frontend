import { HTTPClient } from '@nx-todo-frontend/api';
import { FontsProvider } from '@nx-todo-frontend/fonts';
import { I18NProvider } from '@nx-todo-frontend/i18n';
import { APIProvider } from '@nx-todo-frontend/query';
import { ThemeProvider } from '@nx-todo-frontend/theme';

import dayjs from 'dayjs';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { reportAccessibility } from './common';
import App from './common/App';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import 'dayjs/locale/es';
import 'dayjs/locale/fr';

dayjs.extend(localizedFormat);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
const APP_API_VERSION_PATH = import.meta.env.VITE_APP_API_VERSION_PATH;
const APP_FONTS_URL = import.meta.env.VITE_APP_FONTS_URL;
const APP_I18N_URL = import.meta.env.VITE_APP_I18N_URL;
const APP_LOCALE = import.meta.env.VITE_APP_LOCALE;
const APP_THEME = import.meta.env.VITE_APP_THEME;
const APP_FONT = import.meta.env.VITE_APP_FONT;

const httpClient = new HTTPClient(APP_BACKEND_URL, APP_API_VERSION_PATH);

root.render(
  <StrictMode>
    <BrowserRouter>
      <FontsProvider
        urlApp={APP_FONTS_URL}
        folderPath="/fonts/"
        defaultFont={APP_FONT}
      >
        <I18NProvider
          locale={APP_LOCALE}
          urlApp={APP_I18N_URL}
          folderPath="/translations/"
        >
          <APIProvider httpClient={httpClient}>
            <ThemeProvider theme={APP_THEME} enabledResetTheme>
              <App ToastContainer={ToastContainer} />
            </ThemeProvider>
          </APIProvider>
        </I18NProvider>
      </FontsProvider>
    </BrowserRouter>
  </StrictMode>,
);

reportAccessibility(React);
