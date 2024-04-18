import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, themes } from "@nx-todo-frontend/theme";
import { HTTPClient } from "@nx-todo-frontend/api";
import { APIProvider } from "@nx-todo-frontend/query";
import { I18NProvider } from "@nx-todo-frontend/i18n";

import App from './app/App';

import "./styles.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const httpClient = new HTTPClient("http://localhost:3000");

root.render(
  <StrictMode>
    <BrowserRouter>
      <APIProvider httpClient={httpClient}>
        <ThemeProvider theme={themes.light}>
          <I18NProvider locale="es" urlApp="http://localhost:4200" folderPath="/translations/">
            <App />
          </I18NProvider>
        </ThemeProvider>
      </APIProvider>
    </BrowserRouter>
  </StrictMode>
);
