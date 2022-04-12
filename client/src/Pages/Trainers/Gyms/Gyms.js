import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pokediv } from "../../../SyledComp/Divs";

const Gyms = () =>{

  const [gyms, setGyms] = useState([]);
  const nav = useNavigate()
  const getGyms = async () =>{
    let res = await axios.get("/api/gyms")
    console.log(res)
    setGyms(res.data)
  }

  useEffect(()=>{
    getGyms()
  },[])

  const renderGyms = () =>{
    if(gyms.length === null){
      return(
        <h1>Error Loading Gyms</h1>
      )
    }
    return(
      gyms.map((gym)=>(
      <Pokediv key={gym.id} onClick={()=>{nav(`./${gym.id}`, {state: gym})}}>
        <h2>{gym.name} City Gym</h2>
        <p>{gym.badge_name} Badge</p>
      </Pokediv>
      ))
    )
  }

  return(
    <div>
      <h1>Gyms</h1>
      {renderGyms()}
    </div>
  )
}

export default Gyms