import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import { MoniteProvider } from '@team-monite/ui-widgets-react';
import { MoniteApp } from '@team-monite/sdk-api';

import App from './features/app/App';
import { AUTH_TOKEN_STORAGE_KEY } from './features/app/consts';
import Root from './Root';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Root />);
