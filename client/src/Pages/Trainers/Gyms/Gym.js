import React from "react";
import { useLocation } from "react-router-dom";

const Gym = () =>{
  const {state: gym} = useLocation()
  console.log(gym)

  const claimBadge = () =>{
    
  }

  return(
    <div>
      <h1>{gym.name} City Gym</h1>
      <h2>{gym.badge_name} Badge</h2>
      <button onClick={()=>{claimBadge()}}>Claim Badge</button>
    </div>
  )
}

export default Gym