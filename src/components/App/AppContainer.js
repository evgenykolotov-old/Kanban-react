import React from 'react';
import { RouterProvider } from 'react-router5';
import '@vkontakte/vkui/dist/vkui.css';

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Context from "./context";
import { useAppState } from "./hooks";
import App from "./App";

const AppContainer = ({ router }) => {
  const state = useAppState();

  return (
    <RouterProvider router={router}>
      <Context.Provider value={state}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Context.Provider>
    </RouterProvider>
  );
};

export default AppContainer;