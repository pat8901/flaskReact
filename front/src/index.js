import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements
} from 'react-router-dom'
import Home from './routes/home'
import User from './routes/user'
import Test from './routes/test'
import Navbar from './components/Navbar'
import './App.css'

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '/test',
        element: <Test />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
