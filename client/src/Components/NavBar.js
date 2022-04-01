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
      return(<button onClick={()=>handleLogout()}>LogOut</button>)
    }
    return(
      <>
      <StyledLinkWithPadding to="/trainers/login">Login</StyledLinkWithPadding>
      <StyledLinkWithPadding to="/trainers/register">Register</StyledLinkWithPadding>
      </>
    )
  }

  return(
    <>
    <div style={{display:'flex',background:"#e21111", justifyContent:"center"}}>
    {Options()}
    {rightNav()}
    </div>
    <Outlet/>
    </>
  )
}


