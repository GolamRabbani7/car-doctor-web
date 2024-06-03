import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import About from "../Pages/Home/About/About";
import PrivetRoute from "./PrivetRoute";



const router = createBrowserRouter([
   {
    path:'/',
    errorElement:<ErrorPage></ErrorPage>,
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'/login',
            element:<Login></Login>
        }
        ,
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/about',
            element:<PrivetRoute><About></About></PrivetRoute>
        }
    ]
   }
]);
export default router;
