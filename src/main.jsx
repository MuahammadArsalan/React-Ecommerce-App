
import { createRoot } from 'react-dom/client'

import './index.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Conatct from './Pages/Contact'
import Services from './Pages/Services'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
          path : "contact",
          element:<Conatct/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"*",
       element :  <h1>Not Found </h1>
      }
    ]
  }

])



createRoot(document.getElementById('root')).render(


<RouterProvider router={router} >



</RouterProvider >
)
