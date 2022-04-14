import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import NoMatch from "../Pages/NoMatch";
import Register from "../Pages/Register";
import Badges from "../Pages/Trainers/Badges/Badge";
import Gyms from "../Pages/Trainers/Gyms/Gyms";
import Trainers from "../Pages/Trainers/Trainers";


export const TrainerRoutes = () =>{
  return(
    <Routes>
      <Route path='/' element={<Trainers/>}/>
      <Route path='/gym' element={<Gyms/>}/>
      <Route path='/badge' element={<Badges/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/*' element={<NoMatch/>}/>
    </Routes>
  )
}