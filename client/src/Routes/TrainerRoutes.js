import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import NoMatch from "../Pages/NoMatch";
import Register from "../Pages/Register";
import Trainers from "../Pages/Trainers/Trainers";


export const TrainerRoutes = () =>{
  return(
    <Routes>
      <Route path='/' element={<Trainers/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/*' element={<NoMatch/>}/>
    </Routes>
  )
}