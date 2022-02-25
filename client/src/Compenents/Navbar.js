import React from "react";
import { routes } from "../Routes/Routes";

const Navbar = () =>{

  const Options = () =>{
    return routes.map((route)=>{
      return <a key={route.Name} href={route.path}>{route.Name}</a>
    })
  }

  return(
    <>
      {Options()}
    </>
  )
}

export default Navbar