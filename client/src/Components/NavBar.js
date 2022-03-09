import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routes/Routes";

const Navbar = () =>{

  const Options = () => {
    return routes.map((route)=>{

      return <Link key={route.Name} to={route.path}>{route.Name}</Link>
    })
  }

  return(
    <>
    {Options()}
    </>
  )
}

export default Navbar