import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Faculity from './pages/Faculity.jsx'
import Contact from './components/specific/Contact.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Facility from './pages/Facilites.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/about",
        element:<About />

      },
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/faculty",
        element:<Faculity />
      },{
        path:"/contact",
        element:<ContactUs />
      },
      {
        path:"/facility",
        element:<Facility />
      },
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
