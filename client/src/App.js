import React from "react";
import { Route, Routes } from "react-router-dom";
import {Navbar, TrainerNavbar} from "./Components/NavBar";
import About from "./Pages/About";
import Functions from "./Pages/Functions";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NoMatch from "./Pages/NoMatch";
import Normalize from "./Pages/Normalize";
import NotificationTest from "./Pages/Notificationstest";
import PokemonsInfi from "./Pages/Pokemons/PokemonsInfi";
import PokemonsInfiClick from "./Pages/Pokemons/PokemonsInficlick";
import PokemonsPage from "./Pages/Pokemons/PokemonsPage";
import Register from "./Pages/Register";
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
      <Route path='/notifications' element={<NotificationTest/>}/>
      <Route path='/pokemonsinfi' element={<PokemonsInfi/>}/>
      <Route path='/pokemonspage' element={<PokemonsPage/>}/>
      <Route path='/pokemonsinficlick' element={<PokemonsInfiClick/>}/>
      <Route path='/pokemons2/*' element={<PokemonRoutes2/>}/>
      <Route path='/normalize' element={<Normalize/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<NoMatch/>}/>
      </Route>
      
      <Route element={<TrainerNavbar/>}>
        <Route path='/trainers/*' element={<TrainerRoutes/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
