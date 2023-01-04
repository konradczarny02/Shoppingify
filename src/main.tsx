import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Stats } from './Stats';
import { History } from './History';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/history',
    element: <History />,
  },
  {
    path: '/stats',
    element: <Stats />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
