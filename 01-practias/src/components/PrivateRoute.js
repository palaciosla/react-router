import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({isLogin}) => {
    let auth = isLogin;
    
    return auth ? <Outlet/> : <Navigate to="/login" />;
//   return <Route path={props.path} element={props.element} />;
};

export default PrivateRoute;
