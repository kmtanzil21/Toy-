import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './page/Home.jsx';
import TopProducts from './page/TopProducts.jsx';
import AllProducts from './page/AllProducts.jsx';
import Authentication from './page/Authentication.jsx';
import ToyDetails from './page/ToyDetails.jsx';
import Login from './page/Login.jsx';
import Register from './page/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRouter from './provider/PrivateRouter.jsx'; // Ensure this matches your file name (PrivateRouter vs PrivateRoute)
import ErrorPage from './page/ErrorPage.jsx';
import { Toaster } from 'react-hot-toast'; 
import MyProfile from './page/MyProfile.jsx'; // Import the new page

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
      // ADDED: My Profile Route (Protected)
      {
        path: '/myprofile',
        element: (
          <PrivateRouter>
            <MyProfile />
          </PrivateRouter>
        )
      }
    ]
  },
  {
    path: '/toy/:id',
    element: (
        <PrivateRouter>
            <ToyDetails />
        </PrivateRouter>
    ),
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
   {
     path: '/*',
     Component:ErrorPage,
   }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)