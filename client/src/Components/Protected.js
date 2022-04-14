import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const ProtectedRoute = (props)=>{
   const auth = useContext(AuthContext)
   return auth.user ? <Outlet /> : <Navigate to='/login'/>
}

export default ProtectedRoute