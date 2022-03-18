import axios from "axios";
import React, { useEffect, useState }  from "react";
import { useNavigate } from "react-router-dom";
import RenderPokemons from "./RenderPokemons";

const Pokemons = () =>{
  const nav = useNavigate();
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

  const deletePoke = async (id)=>{
    try{
      await axios.delete(`/api/pokemons/${id}`)
      const updatedPoke = pokemons.filter((p)=>(p.id !== id))
      setPokemons(updatedPoke)
    }catch(err){
      console.log(err)
    }
  }

  return(
    <>
    <h1>Pokemons</h1>
    <button onClick={()=>{nav('/pokemons/new')}}>Add New Pokemon</button>
    <RenderPokemons pokemons={pokemons} deletePoke={deletePoke}/>
    </>
  )

}

export default Pokemons