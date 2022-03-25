import React from "react";
import { Route, Routes } from "react-router-dom";
import NoMatch from "../Pages/NoMatch";
import Pokemon from "../Pages/Pokemons/Pokemon";
import PokeForm from "../Pages/Pokemons/PokemonForms";
import Pokemons from "../Pages/Pokemons/Pokemons";
import Pokemons2 from "../Pages/Pokemons/Pokemons2";

export const PokemonRoutes = () =>{
  return(
    <Routes>
      <Route path='/' element={<Pokemons/>}/>
      <Route path='/:id' element={<Pokemon/>}/>
      <Route path='/:id/edit' element={<PokeForm/>}/>
      <Route path='/new' element={<PokeForm/>}/>
      <Route path='/*' element={<NoMatch/>}/>
    </Routes>
  )
}
export const PokemonRoutes2 = () =>{
  return(
    <Routes>
      <Route path='/' element={<Pokemons2/>}/>
      <Route path='/:id' element={<Pokemon/>}/>
    </Routes>
  )
}