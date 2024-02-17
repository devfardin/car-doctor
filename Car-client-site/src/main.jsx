import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './assets/Components/Route.jsx'
import AppContext from './assets/Components/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <RouterProvider router={Route}> </RouterProvider>
    </AppContext>
  </React.StrictMode>,
)
