import React, { useContext}  from "react";
import { DataContext } from "../../Providers/DataProvider";
import RenderPokemons from "./RenderPokemons";
import LoadingIndicator from "./../../Components/LoadingIndicator"
import axios from "axios";

const Pokemons2 = () =>{
  const {pokemons, setPokemons, loading} = useContext(DataContext)

  console.log(pokemons)

  const deletePoke = async (id) =>{
    try{
      await axios.delete(`/api/pokemons/${id}`)
      const updatePoke = pokemons.filter((p)=>(p.id !==id))
      setPokemons(updatePoke)
    }catch(err){
      console.log(err)
    }
  }

  return(
    <>
    <h1>Pokemons</h1>
    {loading ? LoadingIndicator() : <RenderPokemons pokemons={pokemons} deletePoke={deletePoke}/>}
    </>
  )

}

export default Pokemons2