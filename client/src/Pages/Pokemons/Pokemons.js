import axios from "axios";
import React, { useEffect, useState }  from "react";
import RenderPokemons from "./RenderPokemons";

const Pokemons = () =>{
  
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=>{
    getPokemons()
  },[])

  const getPokemons = async () =>{
    try {
      let res = await axios.get('/api/pokemons')
      console.log(res)
      setPokemons(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <>
    <h1>Pokemons</h1>
    {RenderPokemons(pokemons)}
    </>
  )

}

export default Pokemons