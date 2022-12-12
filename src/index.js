import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Routes/Home/index.js';
import PageOne from './Routes/Page1/index.js';
import PageTwo from './Routes/Page2/index.js';
import reportWebVitals from './reportWebVitals';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import App from './components/App/index.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path= "/" element={<Home />} />
      <Route path= "/Page1" element={<PageOne />} />
      <Route path= "/Page2" element={<PageTwo />} />
    </Route>
  )
)

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









// Alternative to lines 11-18
// const router = createBrowserRouter([
//   {
//     element: <App />,
//     children:[
//       {
//       path: "/",
//       element: <Home />,
//       },
//       {
//         path: "/Page1",
//         element: <PageOne />
//       },
//       {
//         path: "/Page2",
//         element: <PageTwo />
//       },
//     ]
//   },
  
// ]);