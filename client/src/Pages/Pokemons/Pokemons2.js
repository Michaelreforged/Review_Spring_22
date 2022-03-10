import React, { useContext}  from "react";
import { DataContext } from "../../Providers/DataProvider";
import RenderPokemons from "./RenderPokemons";
import LoadingIndicator from "./../../Components/LoadingIndicator"

const Pokemons2 = () =>{
  
  const {pokemons, loading} = useContext(DataContext)

  return(
    <>
    <h1>Pokemons</h1>
    {loading ? LoadingIndicator() : RenderPokemons(pokemons)}
    </>
  )

}

export default Pokemons2