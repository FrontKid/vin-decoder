import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as RedaxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from '../appRouter';
import { store } from '../appStore';

import '../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RedaxProvider store={store}>
      <RouterProvider router={appRouter()} />
    </RedaxProvider>
  </StrictMode>,
);
