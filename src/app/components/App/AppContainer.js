import React from 'react';
import { RouterProvider } from 'react-router5';
import { Provider } from 'react-redux';
import '@vkontakte/vkui/dist/vkui.css';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import App from './App';

const AppContainer = ({ router, store }) => (
  <RouterProvider router={router}>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </RouterProvider>
);

export default React.memo(AppContainer);
