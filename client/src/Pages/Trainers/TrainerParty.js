import React, { useEffect, useState } from "react";
import axios from "axios"
import { Pokediv } from "../../SyledComp/Divs";
import { Link } from "react-router-dom";

const TrainerParty = () =>{

  const [party, setParty] = useState([])

  useEffect(()=>{
    getParty()
  },[])

  const getParty = async () =>{
    try {
      let res = await axios.get("/api/myparty")
      console.log(res)
      setParty(res.data)
    } catch (error) {
      console.log("error")
    }
  }

  const render = () =>{
    return party.map((p)=>{
      return(
        <Pokediv key={p.id}>
          <h1>{p.name}</h1>
        </Pokediv>
      )
    })
  }

  return(
    <div>
      <h1>My Party</h1>
      {party.length<6 && <Link to={"/pokemonspage"}>Catch More Pokemons</Link>}
      {render()}
    </div>
  )
}

export default TrainerParty