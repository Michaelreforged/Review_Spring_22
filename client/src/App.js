import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import About from "./Pages/About";
import Functions from "./Pages/Functions";
import Home from "./Pages/Home";
import { PokemonRoutes, PokemonRoutes2 } from "./Routes/PokemonRoutes";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/functions' element={<Functions/>}/>
      <Route path='/pokemons/*' element={<PokemonRoutes/>}/>
      <Route path='/pokemons2/*' element={<PokemonRoutes2/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
