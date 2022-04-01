import React from "react";
import { Route, Routes } from "react-router-dom";
import {Navbar, TrainersNav} from "./Components/NavBar";
import About from "./Pages/About";
import Functions from "./Pages/Functions";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import { PokemonRoutes, PokemonRoutes2 } from "./Routes/PokemonRoutes";
import { TrainersRoutes } from "./Routes/TrainersRoutes";

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
      <Route element={<TrainersNav/>}>
        <Route path="/trainers/*" element={<TrainersRoutes/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
