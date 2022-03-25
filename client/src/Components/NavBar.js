import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routes/Routes";
import { StyledLinkWithPadding } from "../SyledComp/Divs";

const Navbar = () =>{

  const Options = () => {
    return routes.map((route)=>{
      return <StyledLinkWithPadding key={route.Name} to={route.path}>{route.Name}</StyledLinkWithPadding>
    })
  }

  return(
    <div style={{display:'flex',background:"#e21111", justifyContent:"center"}}>
    {Options()}
    </div>
  )
}

export default Navbar

