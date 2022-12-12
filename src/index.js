import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Routes/Home/index.js';
import PageOne from './Routes/Page1/index.js';
import PageTwo from './Routes/Page2/index.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from './components/Navbar/index.js';


const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
      path: "/",
      element: <Home />,
      },
      {
        path: "/Page1",
        element: <PageOne />
      },
      {
        path: "/Page2",
        element: <PageTwo />
      },
    ]
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
