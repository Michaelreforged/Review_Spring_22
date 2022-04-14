import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { routes, trainerRoutes } from "../Routes/Routes";
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


export const TrainerNavbar = () =>{

  const {user,handleLogout} = useContext(AuthContext)

  const Options = () => {
    return trainerRoutes.map((route)=>{
      return <StyledLinkWithPadding key={route.Name} to={route.path}>{route.Name}</StyledLinkWithPadding>
    })
  }

  const rightNav = () =>{
    if(user){
      return(<StyledLinkWithPadding to="/login" onClick={()=>handleLogout()}>Logout</StyledLinkWithPadding>)
    }
    return(
      <>
      <StyledLinkWithPadding to="/">Home</StyledLinkWithPadding>
      <StyledLinkWithPadding to="/login">Login</StyledLinkWithPadding>
      <StyledLinkWithPadding to="/register">Register</StyledLinkWithPadding>
      </>
    )
  }

  return(
    <>
    <div style={{display:'flex',background:"#e21111", justifyContent:"center"}}>
    {user && Options()}
    {rightNav()}
    </div>
    <Outlet/>
    </>
  )
}
