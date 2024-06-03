import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextProvider } from "../AuthContext/AuthContext";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(ContextProvider);
    const location = useLocation();


    console.log(location.pathname);


    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }


    if (user) {
        return children;
    } else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivetRoute;