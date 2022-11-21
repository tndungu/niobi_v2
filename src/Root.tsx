import React from 'react';
import { MoniteProvider } from '@team-monite/ui-widgets-react';
import { MoniteApp } from '@team-monite/sdk-api';

import App from './features/app/App';
import { AUTH_TOKEN_STORAGE_KEY } from './features/app/consts';
import { store } from './Store/store';
import { Provider } from 'react-redux';

const Root = () => {
  const monite = new MoniteApp({
    apiUrl:"https://api.monite.com/v1",
    entityId: '2973b4e2-4d26-4b63-b60e-39400a4f21ce',
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjp7ImNsaWVudF9pZCI6ImQ4NjJlYjg3LTc1ZDEtNDEyOS05MWI1LTVjNzk2ZmJjNjVhZiIsImNyZWF0ZWRfYXQiOiIyMDIyLTExLTIxVDA3OjU3OjM1LjE0MDk0NiJ9LCJleHAiOjE2NjkwMTkyNTV9.olw2i7B4_GYfaGYLRmalkQAL5-FNnFg7SphCtKGZe14"
  });

  //store.setMoniteApp(monite);

  return (
    <React.StrictMode>
        <Provider store={store}>
          <MoniteProvider
            monite={monite}
            theme={{ select:{
              filterBackgroundColor: '#025041',
              filterBackgroundColorHover:'025041'
            } }}
          >
            <App />
          </MoniteProvider>
        </Provider>
    </React.StrictMode>
  );
};

export default Root;