import {createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddServices from "../Pages/AddServices";
import CheckOut from "../Pages/CheckOut";
import ServiceDetail from "../Pages/ServiceDetail";
import PrivateRoute from "./PrivateRoute";
import ServiceBooks from "../Pages/ServiceBooks";
  
  const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root> </Root>,
      errorElement: <ErrorPage> </ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home> </Home>
        },
        {
            path: '/register',
            element: <Register> </Register>
        },
        {
            path: '/login',
            element: <Login> </Login>
        },
        {
            path: '/service',
            element: <AddServices/>
        },
        {
            path: '/check-out/:id',
            element: <CheckOut/>,
            loader:()=>fetch('http://localhost:5000/services'),
        },
        {
            path: '/service-details/:id',
            element: <PrivateRoute><ServiceDetail> </ServiceDetail> </PrivateRoute>,
            loader:()=>fetch('http://localhost:5000/services'),
        },
        {
          path: '/booking',
          element: <PrivateRoute> <ServiceBooks> </ServiceBooks> </PrivateRoute>
        }
      ]
      
    },
  ]);
  export default Route