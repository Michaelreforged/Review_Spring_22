import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import About from "./Pages/About";
import Functions from "./Pages/Functions";
import Home from "./Pages/Home";
import NoMatch from "./Pages/Pokemons/NoMatch";
import PokemonRoutes from "./Routes/PokemonRoutes";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/functions' element={<Functions/>}/>
      <Route path='/pokemons/*' element={<PokemonRoutes/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<NoMatch/>}/>
    </Routes>
    </>
  );
}

export default App;
