import React from 'react';
import { MoniteProvider } from '@team-monite/ui-widgets-react';
import { MoniteApp } from '@team-monite/sdk-api';

import App from './features/app/App';
import { AUTH_TOKEN_STORAGE_KEY } from './features/app/consts';
import { store } from './Store/store';
import { Provider } from 'react-redux';

const Root = () => {
  // const monite = new MoniteApp({
  //   apiKey:"https://api.monite.com/v1",
  //   entityId: 'ID',
  //   token: ""
  // });

  //store.setMoniteApp(monite);

  return (
    <React.StrictMode>
        <Provider store={store}>
          {/* <MoniteProvider
            monite={monite}
            // REPLACE {} WITH CUSTOM THEME OBJECT OR SET INDIVIDUAL COLORS
            theme={{}}
          > */}
            <App />
          {/* </MoniteProvider> */}
        </Provider>
    </React.StrictMode>
  );
};

export default Root;