import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
   {
    path:'/',
    errorElement:<ErrorPage></ErrorPage>,
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
    ]
   }
]);
export default router;
