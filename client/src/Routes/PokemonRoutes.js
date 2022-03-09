import React from "react";
import { Route, Routes } from "react-router-dom";
import Pokemon from "../Pages/Pokemons/Pokemon";
import Pokemons from "../Pages/Pokemons/Pokemons";

const PokemonRoutes = () =>{
  return(
    <Routes>
      <Route  path='/' element={<Pokemons/>}/>
      <Route  path='/:id' element={<Pokemon/>}/>
    </Routes>
  )
}

export default PokemonRoutes