import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routes/Routes";

const Navbar = () =>{

  const Options = () => {
    return routes.map((route)=>{

      return <Link style={{padding:"10px",textDecoration:"none",}} key={route.Name} to={route.path}>{route.Name}</Link>
    })
  }

  return(
    <div style={{display:'flex',background:"#e21111", justifyContent:"center"}}>
    {Options()}
    </div>
  )
}

export default Navbar

