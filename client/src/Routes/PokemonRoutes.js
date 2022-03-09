import React from "react";
import { Route, Routes } from "react-router-dom";
import Pokemon from "../Pages/Pokemons/Pokemon";
import Pokemons from "../Pages/Pokemons/Pokemons";
import Pokemons2 from "../Pages/Pokemons/Pokemons2";

export const PokemonRoutes = () =>{
  return(
    <Routes>
      <Route  path='/' element={<Pokemons/>}/>
      <Route  path='/:id' element={<Pokemon/>}/>
    </Routes>
  )
}
export const PokemonRoutes2 = () =>{
  return(
    <Routes>
      <Route  path='/' element={<Pokemons2/>}/>
      <Route  path='/:id' element={<Pokemon/>}/>
    </Routes>
  )
}

