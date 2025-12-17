import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './page/Home.jsx';
import TopProducts from './page/TopProducts.jsx';
import AllProducts from './page/AllProducts.jsx';
import Authentication from './page/Authentication.jsx';
import ToyDetails from './page/ToyDetails.jsx';
import Login from './page/Login.jsx';
import Register from './page/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRouter from './provider/PrivateRouter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path:'/topproducts',
        Component:TopProducts
      },
      {
        path:'/allproducts',
        Component:AllProducts
      },
      
    ]
  },
  {
    path: '/toy/:id',
    element: <PrivateRouter>
      <ToyDetails></ToyDetails>
    </PrivateRouter>,
    loader: () => fetch('/allData.json').then(res => res.json())
  },
  {
        path:'/authentication',
        Component:Authentication,
        children:[
          {
            index:true,
            Component:Register
          },
          {
            path:'/authentication/login',
            Component: Login
          }
        ]
   },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />,
    </AuthProvider>

  </StrictMode>,
)
