import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// define as paginas do projeto
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Pages
import Home from './routes/Home';
import Repos from './routes/Repos.tsx';

//cria as rotas para as respectivas páginas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/repos/:username',
        element: <Repos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
