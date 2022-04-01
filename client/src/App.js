import React from "react";
import { Route, Routes } from "react-router-dom";
import {Navbar, TrainerNavbar} from "./Components/NavBar";
import About from "./Pages/About";
import Functions from "./Pages/Functions";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import { PokemonRoutes, PokemonRoutes2 } from "./Routes/PokemonRoutes";
import { TrainerRoutes } from "./Routes/TrainerRoutes";

function App() {
  return (
    <>
    <Routes>
      <Route element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='/functions' element={<Functions/>}/>
      <Route path='/pokemons/*' element={<PokemonRoutes/>}/>
      <Route path='/pokemons2/*' element={<PokemonRoutes2/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<NoMatch/>}/>
      </Route>
      <Route element={<TrainerNavbar/>}>
        <Route path='/trainers/*' element={<TrainerRoutes/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
