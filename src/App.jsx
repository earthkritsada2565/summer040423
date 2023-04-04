import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import router from './pages/router'


export default function App() {



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
