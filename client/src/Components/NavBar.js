import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { routes, trainersroutes } from "../Routes/Routes";
import { StyledLinkWithPadding } from "../SyledComp/Divs";

export const Navbar = () =>{
  const Options = () => {
    return routes.map((route)=>{
      return <StyledLinkWithPadding key={route.Name} to={route.path}>{route.Name}</StyledLinkWithPadding>
    })
  }

  return(
    <div>
    <div style={{display:'flex',background:"#e21111", justifyContent:"center"}}>
    {Options()}
    </div>
    <Outlet/>
    </div>
  )
}
export const TrainersNav = () =>{
  const {user, handleLogout} = useContext(AuthContext)

  const Options = () => {
    return trainersroutes.map((route)=>{
      return <StyledLinkWithPadding key={route.Name} to={route.path}>{route.Name}</StyledLinkWithPadding>
    })
  }

  const rightNav = () =>{

    if(user){
      <button onClick={()=>handleLogout()}>Logout</button>
    }
    return(
      <>
      <StyledLinkWithPadding to="/login">Login</StyledLinkWithPadding>
      <StyledLinkWithPadding to="/register">Register</StyledLinkWithPadding>
      </>
    )
  }

  return(
    <div>
    <div style={{display:'flex',background:"#e21111", justifyContent:"center"}}>
    {Options()}
    {rightNav()}
    </div>
    <Outlet/>
    </div>
  )
}

